
const btn = document.querySelector('.takeImageBtn');


btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.template_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.general_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.homepage_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})



