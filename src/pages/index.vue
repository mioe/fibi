<script setup lang="ts">
import { useCollection, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const noteRef = collection(db, 'note')
const notes = useCollection(noteRef)

const secretRef = collection(db, 'secret')
// @ts-ignore
const secrets = useCollection(secretRef)
</script>

<template>
	<Transition>
		<div v-if="notes.length" class="flex flex-col gap-.25">
			<RouterLink
				v-for="note in notes"
				:key="note.id"
				to="/"
				class="bg-$accent-bg flex p-2 first-of-type:rounded-t-2 last-of-type:rounded-b-2"
			>
				<div v-if="note.favicon" class="flex">
					dd
				</div>
				<div>
					<p>
						{{ note.title }}
					</p>
					<p>
						{{ note.description }}
					</p>
					<span>
						{{ note.id }}
					</span>
				</div>
			</RouterLink>
		</div>
	</Transition>
</template>
