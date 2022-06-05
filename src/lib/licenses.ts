export class Descriptive {
	readonly short: string;
	readonly description: string;

	constructor(short: string, description: string) {
		this.short = short;
		this.description = description;
	}
}

export namespace Permissions {
	export const COMMERCIAL_USE = new Descriptive(
		"Commercial use",
		"The licensed material and derivatives may be used for commercial purposes."
	);
	export const PRIVATE_USE = new Descriptive(
		"Private use",
		"The licensed material may be used and modified in private."
	);
	export const PATENT_USE = new Descriptive(
		"Patent use",
		"This license provides an express grant of patent rights from contributors."
	);
	export const DISTRIBUTION = new Descriptive(
		"Distribution",
		"The licensed material may be distributed."
	);
	export const MODIFICATION = new Descriptive(
		"Modification",
		"The licensed material may be modified."
	);
}

export namespace Conditions {
	export const NOTICE = new Descriptive(
		"License and copyright notice",
		"A copy of the license and copyright notice must be included with the licensed material."
	);
	export const DISCLOSE_SOURCE = new Descriptive(
		"Disclose source",
		"Source code must be made available when the licensed material is distributed."
	);
	export const SAME_LICENSE = new Descriptive(
		"Same license",
		"Modifications must be released under the same license when distributing the \
    licensed material. In some cases a similar or related license may be used."
	);
	export const STATE_CHANGES = new Descriptive(
		"State changes",
		"Changes made to the licensed material must be documented."
	);
}

export namespace Limitations {
	export const LIABILITY = new Descriptive(
		"Liability",
		"This license includes a limitation of liability."
	);
	export const WARRANTY = new Descriptive(
		"Warranty",
		"This license explicitly states that it does NOT provide any warranty."
	);
}

export class License {
	readonly descriptor: string;
	readonly short: string;
	readonly name: string;
	readonly description: string;
	readonly link: string;

	readonly permissions: Descriptive[];
	readonly conditions: Descriptive[];
	readonly limitations: Descriptive[];
	readonly copy: string;

	constructor(
		descriptor: string,
		short: string,
		name: string,
		description: string,
		link: string,
		permissions: Descriptive[],
		conditions: Descriptive[],
		limitations: Descriptive[],
		copy: string
	) {
		this.descriptor = descriptor;
		this.short = short;
		this.name = name;
		this.description = description;
		this.link = link;
		this.permissions = permissions;
		this.conditions = conditions;
		this.limitations = limitations;
		this.copy = copy;
	}

	fetchCopy(): Promise<string> {
		return new Promise((resolve, reject) => {
			const xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function () {
				if (xmlHttp.readyState === 4) resolve(xmlHttp.response.toString());
			};
			xmlHttp.onerror = reject;
			xmlHttp.open("GET", this.copy, true);
			xmlHttp.send(null);
			new XMLHttpRequest();
		});
	}
}

export namespace Licenses {
	export const MIT = new License(
		"mit",
		"MIT",
		"MIT License",
		"The MIT License is a permissive license to use and distribute programs or libraries.",
		"https://mit-license.org/",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE
		],
		[Conditions.NOTICE],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/mit.txt"
	);
	export const GPLv2 = new License(
		"gpl-2.0",
		"GNU GPLv2",
		"GNU General Public License v2",
		"The GNU General Public License (GPL) is a free software license for software and other kinds of works.",
		"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE
		],
		[
			Conditions.DISCLOSE_SOURCE,
			Conditions.NOTICE,
			Conditions.SAME_LICENSE,
			Conditions.STATE_CHANGES
		],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/gpl-2.0.txt"
	);
	export const GPLv3 = new License(
		"gpl-3.0",
		"GNU GPLv3",
		"GNU General Public License v3",
		"The GNU General Public License (GPL) is a free software license for software and other kinds of works.",
		"https://www.gnu.org/licenses/gpl-3.0.en.html",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE,
			Permissions.PATENT_USE
		],
		[
			Conditions.DISCLOSE_SOURCE,
			Conditions.NOTICE,
			Conditions.SAME_LICENSE,
			Conditions.STATE_CHANGES
		],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/gpl-3.0.txt"
	);
}

export const licenses: License[] = [Licenses.MIT, Licenses.GPLv2, Licenses.GPLv3];
