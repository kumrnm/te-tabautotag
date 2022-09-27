const Addon_Id = "tabautotag";

const config = GetAddonElement(Addon_Id);
if (!config.getAttribute("Set")) {
	config.setAttribute("HideDuplication", "1");
}

if (window.Addon == 1) {

	function getConfig(key) {
		return config.getAttribute(key);
	}

	function escapeForRegExp(text) {
		return text.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
	}

	function regExpFromTextList(textList, regExpOption) {
		if (!textList) return null;

		const texts = textList.split(/[,\n] */).filter(Boolean);
		if (texts.length == 0) return null;

		return new RegExp(texts.map(escapeForRegExp).join("|"), regExpOption);
	}

	const reTags = regExpFromTextList(getConfig("TagNames"));
	const reExclude = regExpFromTextList(getConfig("Exclude"), "g");
	const hideDuplication = Boolean(getConfig("HideDuplication"));

	if (reTags) {
		AddEvent("GetTabName", function (Ctrl) {
			let path = api.GetDisplayNameOf(Ctrl, SHGDN_FORPARSING | SHGDN_FORPARSINGEX);
			if (typeof path != "string") return "";
			let tabName = path.substr(path.lastIndexOf("\\") + 1);

			if (reExclude) path = path.replace(reExclude, ",,,,,,,,");
			const match = path.match(reTags);
			if (match) {
				const tagName = match[0];
				if (!hideDuplication || tabName.indexOf(tagName) < 0) {
					tabName += " (" + tagName + ")";
				}
			}

			return tabName;
		}, true);
	}

} else {
	SetTabContents(0, "", await ReadTextFile("addons\\" + Addon_Id + "\\options.html"));
}
