// necessity is the mother of invention,
// ... lazyness is the father
// ... and I'm the child (who takes after my father)
const log = console.log; // create a short-hand for console.log

log('JavaScript is working!');
// with only one form on the page, we can use the following
document
    .querySelector('form')
    .addEventListener('submit', function(event) {
        log('Form submit event detected');
        // The submit event would send the form data to
        // the web server, and then the browser would
        // refresh the page's contents with the response
        // from the web server.
        // We prevent this default behaviour from happening in this course.
        event.preventDefault();
        // We can access the form object through the
        // event object that was passed into this
        // handler function.
        log(event.target);
        // We can access the form's input elements
        // through the form object.
        log(event.target.elements);
        // The .elements property is a collection of all the form-related elements
        // for that particular form DOM object.
        // We can access any of those elements via the name attribute of that element.
        // This is because forms are submitted as key-value (name-value) pairs,
        // ************************
        const theForm = event.target;
        const theTagInput = theForm.elements.tag;
        //                                   \_/
        //        using the name of element  _|
        // That works well when the name does not have
        // spaces or special characters.
        // Otherwise, we would have to get the element
        // by its position in the elements array.
        // In other words, the following usage would
        // also get the same element as above.
        log(theForm.elements['tag']) // hint: use the name attribute
        // As an aside, this way of using a string to index the items in a collection is commonly referred to as a "dictionary" approach.

        // Some simple validation
        const msg = document.querySelector('.feature.error');
        if(theTagInput.value.length === 0) {
            msg.classList.remove('hidden');
        } else {
            msg.classList.add('hidden');
            const imageTags = document.querySelector('.feature.tags');
            imageTags.innerHTML += `<mark>${theTagInput.value}</mark>&nbsp;&nbsp;&nbsp;`;
        }
        // To improve the user experience,
        // whenever they submit the form,
        // we clear the input element
        theTagInput.value = '';
        // and we can set the focus to the input element
        theTagInput.focus();
});

// An event listener for the Clear Tags button.
// Search the document for a button whose type is 'button',
// and then add an event listener for the click event.
document
    .querySelector('button[type="button"]')
    .addEventListener('click', function(event) {
        log('Clear Tags button clicked');
        const imageTags = document.querySelector('.feature.tags');
        imageTags.innerHTML = '';
    });