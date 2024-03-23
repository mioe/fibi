import {
	LOCAL_STORAGE_PREFIX,
} from '~/constants'

export const setStorageKey = (keyName: string) => `${LOCAL_STORAGE_PREFIX}${keyName}`
