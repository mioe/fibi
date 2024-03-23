<script setup lang="ts">
withDefaults(
	defineProps<{
		hello?: string
		world: string
	}>(),
	{
		hello: 'hello',
	},
)
</script>

<template>
	<section class="h-[20px] w-[20px] bg-green-900">
		{{ hello }} {{ world }}
	</section>
</template>
