const formatUrlYoutube = (url) => {
    const Url = url.replace("watch?v=", "embed/")
    return Url
}

export default formatUrlYoutube