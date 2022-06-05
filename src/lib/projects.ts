import { Licenses, License } from "$lib/licenses";

export class Project {
	readonly descriptor: string;
	readonly name: string;
	readonly description: string;
	readonly license: License;
	readonly link: string;
	readonly image: string | undefined;

	constructor(
		descriptor: string,
		name: string,
		description: string,
		license: License,
		link: string,
		image?: string
	) {
		this.descriptor = descriptor;
		this.name = name;
		this.description = description;
		this.license = license;
		this.link = link;
		this.image = image;
	}
}

export const projects: Project[] = [
	new Project(
		"kekupload-server",
		"KekUpload Server",
		"A backend written in <a href='https://rust-lang.org/' target='_blank'>rust</a> \
        for uploading and sharing files.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-server"
	),
	new Project(
		"kekupload-client",
		"KekUpload Client",
		"A web client created using <a href='https://kit.svelte.dev/' target='_blank'>SvelteKit</a> \
        for uploading files to <a href='?id=kekupload-server'>KekUpload Server</a>.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-client"
	),
	new Project(
		"kekupload-lib-ts",
		"KekUpload Library TypeScript",
		"A library written in <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a> \
        for uploading files to <a href='?id=kekupload-server'>KekUpload Server</a>.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-lib-ts"
	),
	new Project(
		"resvg",
		"ReSVG",
		"An advanced SVG compiler written in <a href='https://python.org'>python</a>, \
        which includes many features.",
		Licenses.MIT,
		"https://github.com/KotwOSS/resvg"
	)
];
