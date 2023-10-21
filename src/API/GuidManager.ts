import { v4 as uuidv4 } from 'uuid';

const USER_GUID_KEY = 'userGuid';

export const getOrGenerateGuid = (): string => {
  let userGuid: string | null = localStorage.getItem(USER_GUID_KEY);

  if (!userGuid) {
    userGuid = uuidv4();
    localStorage.setItem(USER_GUID_KEY, userGuid);
  }

  return userGuid;
};
