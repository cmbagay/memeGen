const form = document.querySelector('#meme-form');

const topTxt = document.querySelector('input[name="top"]');
const imgURL = document.querySelector('input[name="image"]');
const bottomTxt = document.querySelector('input[name="bottom"]');

const meme = document.querySelector('#final-meme');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const top = topTxt.value;
	const url = imgURL.value;
	const btm = bottomTxt.value;

	if (top == '' || url == '' || btm == '') { //alert for empty fields
		alert("Please fill out all text inputs");
	}

	else { //make meme
		const genMeme = document.createElement('div');
		genMeme.setAttribute('id', 'generated')

		//append top text
		const memeTopTxt = makeTopTxt(top);
		genMeme.appendChild(memeTopTxt);

		//append img
		const memeImg = makeImg(url);
		genMeme.appendChild(memeImg);

		//append bottom text
		const memeBtmTxt = makeBtmTxt(btm);
		genMeme.appendChild(memeBtmTxt);

		//append remove button
		const btn = document.createElement('button');
		btn.innerText = 'x';
		genMeme.appendChild(btn);

		meme.appendChild(genMeme);

		form.reset();
	}
});

function makeTopTxt(text) {

	const makeTop = document.createElement('div');
	makeTop.innerText = text;
	makeTop.className = 'topTxt';

	return makeTop;
}

function makeBtmTxt(text) {

	const makeBtm = document.createElement('div');
	makeBtm.innerText = text;
	makeBtm.className = 'btmTxt';

	return makeBtm;
}

function makeImg(url) {

	const makeImg = document.createElement('img');
	makeImg.src = url;

	return makeImg;

}


meme.addEventListener('click', function (e) {
	e.preventDefault();
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
})



