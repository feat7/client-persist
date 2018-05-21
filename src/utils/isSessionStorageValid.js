function isSessionStorageValid() {
    try {
        return (
            typeof sessionStorage !== "undefined" &&
            "setItem" in sessionStorage &&
            // in IE8 typeof sessionStorage.setItem === 'object'
            !!sessionStorage.setItem
        );
    } catch (e) {
        return false;
    }
}

export default isSessionStorageValid;
