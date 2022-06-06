/* eslint-disable @typescript-eslint/no-namespace */

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
	export const NOTICE_SOURCE = new Descriptive(
		"License and copyright notice for source",
		"A copy of the license and copyright notice must be included with the licensed \
        material in source form, but is not required for binaries."
	);
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
	export const SAME_LICENSE_LIBRARY = new Descriptive(
		"Same license (library)",
		"Modifications must be released under the same license when distributing the licensed material. \
        In some cases a similar or related license may be used, or this condition may not apply to works \
        that use the licensed material as a library."
	);
	export const SAME_LICENSE_FILE = new Descriptive(
		"Same license (file)",
		"Modifications of existing files must be released under the same license when distributing \
        the licensed material. In some cases a similar or related license may be used."
	);
	export const STATE_CHANGES = new Descriptive(
		"State changes",
		"Changes made to the licensed material must be documented."
	);
	export const NETWORK_USE = new Descriptive(
		"Network use is distribution",
		"Users who interact with the licensed material via network are given the right to receive a copy of the source code."
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
	export const TRADEMARK_USE = new Descriptive(
		"Trademark use",
		"This license explicitly states that it does NOT grant trademark rights, \
        even though licenses without such a statement probably do not grant any implicit trademark rights."
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
	export const GNU_GPLv2 = new License(
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
	export const GNU_GPLv3 = new License(
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
	export const GNU_AGPLv3 = new License(
		"agpl-3.0",
		"GNU AGPLv3",
		"GNU Affero General Public License v3.0",
		"The GNU Affero General Public License (AGPL) is a free software license for software and other kinds of works.",
		"https://www.gnu.org/licenses/agpl-3.0.en.html",
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
			Conditions.NETWORK_USE,
			Conditions.SAME_LICENSE,
			Conditions.STATE_CHANGES
		],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/agpl-3.0.txt"
	);
	export const GNU_LGPLv3 = new License(
		"lgpl-3.0",
		"GNU LGPLv3",
		"GNU Lesser General Public License v3.0",
		"The GNU Lesser General Public License (LGPL) is a free software license for software and other kinds of works.",
		"https://www.gnu.org/licenses/lgpl-3.0.en.html",
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
			Conditions.SAME_LICENSE_LIBRARY,
			Conditions.STATE_CHANGES
		],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/lgpl-3.0.txt"
	);

	export const MPLv2 = new License(
		"mpl-2.0",
		"MPLv2",
		"Mozilla Public License 2.0",
		"The Mozilla Public License 2.0 (MPL 2.0) is a permissive license to use and distribute programs or libraries.",
		"https://www.mozilla.org/en-US/MPL/2.0/",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE,
			Permissions.PATENT_USE
		],
		[Conditions.DISCLOSE_SOURCE, Conditions.NOTICE, Conditions.SAME_LICENSE_LIBRARY],
		[Limitations.LIABILITY, Limitations.WARRANTY, Limitations.TRADEMARK_USE],
		"/licenses/mpl-2.0.txt"
	);
	export const APACHEv2 = new License(
		"apache-2.0",
		"APACHEv2",
		"Apache License 2.0",
		"The Apache License, Version 2.0 (Apache-2.0) is a permissive software license.",
		"https://www.apache.org/licenses/LICENSE-2.0",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE,
			Permissions.PATENT_USE
		],
		[Conditions.NOTICE, Conditions.STATE_CHANGES],
		[Limitations.LIABILITY, Limitations.WARRANTY, Limitations.TRADEMARK_USE],
		"/licenses/apache-2.0.txt"
	);
	export const BSLv1 = new License(
		"bsl-1.0",
		"BSLv1",
		"Boost Software License 1.0",
		"The Boost Software License (BSL-1.0) is a permissive software license.",
		"https://www.boost.org/LICENSE_1_0.txt",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE
		],
		[Conditions.NOTICE_SOURCE],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/bsl-1.0.txt"
	);
	export const UNLICENSE = new License(
		"unlicense",
		"UNLICENSE",
		"The Unlicense",
		"The Unlicense is a permissive license that allows you to do almost anything you want with your code.",
		"https://unlicense.org/",
		[
			Permissions.COMMERCIAL_USE,
			Permissions.DISTRIBUTION,
			Permissions.MODIFICATION,
			Permissions.PRIVATE_USE
		],
		[],
		[Limitations.LIABILITY, Limitations.WARRANTY],
		"/licenses/unlicense.txt"
	);
}

export const licenses: License[] = [
	Licenses.MIT,
	Licenses.GNU_GPLv2,
	Licenses.GNU_GPLv3,
	Licenses.GNU_AGPLv3,
	Licenses.GNU_LGPLv3,
	Licenses.MPLv2,
	Licenses.APACHEv2,
	Licenses.BSLv1,
	Licenses.UNLICENSE
];
