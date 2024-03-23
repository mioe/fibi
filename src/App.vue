<script setup lang="ts">
import { getCurrentUser } from 'vuefire'
const authStore = useAuthStore()
const { handleSignOut: authSignOut } = authStore
const isLoading = ref(true)
const router = useRouter()

async function handleSignOut() {
	await authSignOut()
	router.push({ name: 'sign-in' })
}

onMounted(async() => {
	await getCurrentUser()
	isLoading.value = false
	console.log('🦕 secret:', import.meta.env.VITE_APP_SECRET)
})
</script>

<template>
	<main class="relative mx-auto max-w-xl w-full flex flex-col p-4 min-h-svh">
		<Transition>
			<header
				v-if="isLoading"
				class="absolute left-0 z-1 w-full flex flex-col items-center justify-center gap-4 text-center"
			>
				<div>
					<h1>Welcome to FIBI</h1>
					<p>Experimental pass manager</p>
				</div>
				<div class="i-mi:svg-spinners-ring-resize h-12 w-12" />
			</header>
			<div
				v-else
				class="relative h-full flex flex-1 flex-col"
			>
				<RouterView />
				<footer
					v-if="authStore.currentUser"
					class="mt-auto w-full flex flex-col items-center justify-center"
				>
					<button
						class="inline rounded-full border-none bg-transparent px-4 py-1 underline decoration-dotted op-50"
						@click="handleSignOut"
					>
						{{ $t('auth.sign-out') }}
					</button>
				</footer>
			</div>
		</Transition>
	</main>
</template>
