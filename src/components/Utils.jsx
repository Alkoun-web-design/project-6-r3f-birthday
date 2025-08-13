
export function Navigation () {
    for (let navButton of navButtons) {
        if (navButton.includes(this.id)) {
            for (let page of pages) {
                if (navButton.includes(page)){
                    animation(page, fadeIn, null, null, 0, 1000, false);
                    document.querySelector(page).classList.add('active');
                    document.querySelector(page).classList.remove('inactive');
                } else {
                    animation(page, fadeOut, null, null, 0, 500, false);
                    document.querySelector(page).classList.add('inactive');
                    document.querySelector(page).classList.remove('active');
                }
            }  
        }
    }
};