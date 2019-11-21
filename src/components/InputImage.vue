<template>
	<sui-container>
		<sui-divider hidden />
		<sui-header as="h1" floated="left">
			Below is an example of how to use a blob to display in an input field <code>[type = originalFile]</code>
		</sui-header>

		<sui-divider hidden clearing />
		<sui-input type="file" @change="handleFile($event)" />
		<sui-divider hidden clearing />
		<sui-message info v-if="originalFile">
			<strong>Original Info</strong>
			<br />
			Name: {{ name }}
			<br />
			Size: {{ size }}
			<br />
			Extension: {{ type }}
		</sui-message>
		<sui-divider hidden clearing />
		<sui-message info v-if="filePreview">
			<sui-image :src="filePreview" fluid :alt="name" />
		</sui-message>
	</sui-container>
</template>

<script>
export default {
	data() {
		return {
			originalFile: null,
			filePreview: null
		};
	},
	methods: {
		handleFile(event) {
			const file = event.target.files[0];

			this.originalFile = file;
			this.filePreview = URL.createObjectURL(file);
		}
	},
	computed: {
		name() {
			return this.originalFile ? this.originalFile.name : null;
		},
		size() {
			return this.originalFile
				? `~${Math.ceil(this.originalFile.size / 1024)}Kb`
				: null;
		},
		type() {
			return this.originalFile
				? this.originalFile.type
						.toString()
						.split("/")
						.pop()
				: null;
		}
	}
};
</script>

<style scoped></style>
