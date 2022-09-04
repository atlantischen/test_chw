

interface IApplication {
    artworkUrl60: string
    artworkUrl100: string
    trackName: string
    trackContentRating: string
    userRatingCount: number
    genres: string[]
    trackId: number
    description: string
    sellerName: string
}

interface IListItem {
    title: {
        label: string
    }
    summary: {
        label: string
    }
    category: {
        attributes: {
            label: string
        }
    }
    id: {
        attributes: {
            "im:id": string
        }
    },
    "im:name": {
        label: string
    }
    "im:image": {
        label: string
    }[]
}

interface IList {
    feed: {
        entry: IListItem[]
    }
}

interface IResultList {
    resultCount: number
    results: IApplication[]
}