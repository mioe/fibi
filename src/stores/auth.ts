import {
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from 'firebase/auth'
import { doc, collection } from 'firebase/firestore'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'
import {
	useCurrentUser,
	useFirebaseAuth,
	useDocument,
	useFirestore,
} from 'vuefire'

export const useAuthStore = defineStore('auth', () => {
	const googleAuthProvider = new GoogleAuthProvider()
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const auth = useFirebaseAuth()! // only exists on client side
	const user = useCurrentUser()
	const isAdm = computed(() => user?.value?.uid === import.meta.env.VITE_ADM_UUID)

	const db = useFirestore()
	const {
		data,
		pending,
		error,
	} = useDocument(() =>
		user.value
			? doc(collection(db, 'user'), user.value?.uid)
			: null,
	)

	async function handleSignInPopup() {
		await signInWithPopup(auth, googleAuthProvider)
			.catch((reason) => {
				console.error('🦕 Failed signInWithPopup', reason)
			})
	}

	async function handleSignOut() {
		await signOut(auth)
	}

	return {
		currentUser: user,
		authMetadata: data,
		authPending: pending,
		authError: error,
		isAdm,

		handleSignInPopup,
		handleSignOut,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
