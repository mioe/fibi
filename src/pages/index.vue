<script setup lang="ts">
import { useCollection, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const noteRef = collection(db, 'note')
const notes = useCollection(noteRef)
</script>

<template>
	<Transition>
		<div v-if="notes.length" class="flex flex-col">
			<RouterLink
				v-for="note in notes"
				:key="note.id"
				to="/"
				class="bg-$accent-bg block p-2 first-of-type:rounded-t-2 last-of-type:rounded-b-2"
			>
				{{ note }}
			</RouterLink>
		</div>
	</Transition>
</template>
