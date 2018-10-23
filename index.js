const formatDate = (timeInSeconds) => {

    const h = Math.floor(timeInSeconds / 3600);
    const restSH = (timeInSeconds - h * 3600);
    const m = Math.floor(restSH / 60);
    const s = Math.round(restSH - (m * 60))


    if (timeInSeconds === undefined) {

        return `0s`;

    } else if (timeInSeconds > 3600) {

        if (m === 0 && s === 0) {

            return h + "h";

        } else if (m === 0) {

            return h + "h " + s + "s";

        } else if (s === 0) {

            return h + "h " + m + "m";

        }

        return h + "h " + m + "m " + s + "s";

    } else if (timeInSeconds > 60 && timeInSeconds < 3600) {

        if (s === 0) {

            return m + "m";

        }

        return m + "m " + s + "s";

    } else if (timeInSeconds < 60) {

        return s + "s";
    }

    return `${timeInSeconds}s`;
}

module.exports = formatDate;