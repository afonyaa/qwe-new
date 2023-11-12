import { FC, useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUsersForSharingToken } from './queries/getUsersForSharingToken';
import { UserForTokenSelection } from './interfaces';
import { shareTokenQuery } from './queries/shareToken';
import { toast } from 'react-toastify';

export const ShareToken: FC = () => {
  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ['usersForSharingToken'],
    queryFn: getUsersForSharingToken,
    refetchOnWindowFocus: false,
  });

  const { mutate: shareTokenMutate, isLoading: shareTokenLoading } =
    useMutation({
      mutationKey: ['shareToken'],
      mutationFn: shareTokenQuery,
      onSuccess: () => {
        toast.success('Token shared', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
      onError: (e: any) => {
        toast.error(JSON.stringify(e.data), {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
    });

  const [searchUserString, setSearchUserString] = useState('');
  const [token, setToken] = useState('');

  const [usersSelection, setUsersSelection] = useState<UserForTokenSelection[]>(
    [],
  );

  useEffect(() => {
    if (usersData) {
      setUsersSelection(() => {
        return usersData.map((userEmail) => {
          return {
            email: userEmail,
            selected: false,
          };
        });
      });
    }
  }, [usersData]);

  const filteredUsers = useMemo(() => {
    return usersSelection?.filter((user) => {
      return (
        user.email.toUpperCase().indexOf(searchUserString.toUpperCase()) > -1
      );
    });
  }, [searchUserString, usersSelection]);

  const handleShareTokenButton = () => {
    shareTokenMutate({
      emails: usersSelection
        ?.filter((user) => user.selected)
        ?.map((user) => user.email),
      token: token,
    });
  };

  const handleToggleUserSelect = (email: string) => {
    setUsersSelection(
      (users) =>
        users?.map((user) => {
          if (user.email !== email) {
            return user;
          } else
            return {
              email: user.email,
              selected: !user.selected,
            };
        }),
    );
  };

  return (
    <div>
      <h1 className="text-xl font-medium">Share token with others</h1>
      <div className="mt-2">
        <input
          type="text"
          value={searchUserString}
          onChange={(e) => setSearchUserString(e.target.value)}
          placeholder="Search user"
          className="input input-bordered input-sm w-full max-w-xs focus:outline-none"
        />
        {usersLoading ? (
          <div className="flex flex-col gap-2 w-1/2 mt-6">
            {Array.from(new Array(4)).map(() => (
              <div className="skeleton-pulse h-8 rounded-md bg-slate-100" />
            ))}
          </div>
        ) : (
          <>
            <div className="h-64 overflow-y-auto py-4 mt-2">
              {filteredUsers?.map((user) => (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={user.selected}
                    onChange={() => handleToggleUserSelect(user.email)}
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span>{user.email}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              <input
                type="text"
                placeholder="Token"
                onChange={(e) => setToken(e.target.value)}
                className="input focus:outline-none input-bordered input-primary  input-sm w-full max-w-xs"
              />
              <button
                onClick={handleShareTokenButton}
                className={`btn btn-primary btn-sm ${
                  (!token || shareTokenLoading) && 'btn-disabled'
                }`}
              >
                {shareTokenLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  'Share token'
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
