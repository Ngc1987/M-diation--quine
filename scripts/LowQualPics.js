import glob from "glob";
import sharp from "sharp";

glob(`../public/assets/**/*.jpg`, { matchBase: true},

	function (er, files) {

		for (let file of files) {

			if (file.endsWith("lqip.jpg")) {
				continue
			}

			sharp(file)
				.resize(256, 256)
				.toFile(`${file}.lqip.jpg`)
				.then((_data) => {
					console.log(_data)
				})
				.catch((err) => { console.error(err) })
		}
	}
)