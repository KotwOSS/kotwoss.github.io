import { Licenses, License } from "$lib/licenses";

export class Project {
	readonly descriptor: string;
	readonly name: string;
	readonly description: string;
	readonly license: License;
	readonly link: string;
	readonly background: string;
	readonly hover_color: string;

	constructor(
		descriptor: string,
		name: string,
		description: string,
		license: License,
		link: string,
		background = "black",
		hover_color = "white"
	) {
		this.descriptor = descriptor;
		this.name = name;
		this.description = description;
		this.license = license;
		this.link = link;
		this.background = background;
		this.hover_color = hover_color;
	}
}

const trans = "60";
export function gradient(start: string, end: string) {
	return `linear-gradient(45deg, ${start}${trans}, ${end}${trans})`;
	// return "linear-gradient(45deg, #9a00d660, #d6005260)";
}

export const projects: Project[] = [
	new Project(
		"kekupload-server",
		"KekUpload Server",
		"A backend written in <a href='https://rust-lang.org/' target='_blank'>rust</a> \
        for uploading and sharing files.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-server",
		gradient("#9a00d6", "#d60052"),
		"#d6a800"
	),
	new Project(
		"kekupload-client",
		"KekUpload Client",
		"A web client created using <a href='https://kit.svelte.dev/' target='_blank'>SvelteKit</a> \
        for uploading files to <a href='?id=kekupload-server'>KekUpload Server</a>.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-client",
		gradient("#d60052", "#d65200"),
		"#d6a800"
	),
	new Project(
		"kekupload-lib-ts",
		"KekUpload Library TypeScript",
		"A library written in <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a> \
        for uploading files to <a href='?id=kekupload-server'>KekUpload Server</a>.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kekupload-lib-ts",
		gradient("#d65200", "#d69a00"),
		"#d6a800"
	),
	new Project(
		"resvg",
		"ReSVG",
		"An advanced SVG compiler written in <a href='https://python.org'>python</a>, \
        which includes many features.",
		Licenses.MIT,
		"https://github.com/KotwOSS/resvg",
		gradient("#d69a00", "#abd600"),
		"#d6a800"
	),
	new Project(
		"kock-themes",
		"Kock Themes",
		"A collection of cool vscode themes made by Keks.",
		Licenses.MIT,
		"https://github.com/KotwOSS/kock-themes",
		gradient("#abd600", "#00d6a1"),
		"#d6a800"
	)
];
