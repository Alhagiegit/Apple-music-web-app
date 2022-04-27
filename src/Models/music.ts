export interface ItunesResponce {
    resultCount: number;
    results: Song[];
}

export interface Song {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: Date;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
    collectionArtistId?: number;
    collectionArtistViewUrl: string;
    trackRentalPrice?: number;
    collectionHdPrice?: number;
    trackHdPrice?: number;
    trackHdRentalPrice?: number;
    contentAdvisoryRating: string;
    shortDescription: string;
    longDescription: string;
    hasITunesExtras?: boolean;
    collectionArtistName: string;
}

