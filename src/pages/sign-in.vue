<script setup lang="ts">
const authStore = useAuthStore()
const { handleSignInPopup } = authStore

const isLoading = ref(false)

async function handleSignIn() {
	isLoading.value = true
	await handleSignInPopup()
	isLoading.value = false
}
</script>

<template>
	<section class="flex flex-col items-center justify-center gap-4">
		<template v-if="!authStore.currentUser">
			<h1>{{ $t('auth.sign-in') }}:</h1>
			<button
				class="grid h-12 w-12 place-content-center border-2 border-gray rounded-full border-solid bg-white p-0"
				:disabled="isLoading"
				@click="handleSignIn"
			>
				<div class="i-mi:logos-google-icon h-6 w-6" />
			</button>
		</template>
		<template v-else>
			<p>{{ $t('hello', { name: authStore.currentUser.displayName }) }}!</p>
		</template>
	</section>
</template>
