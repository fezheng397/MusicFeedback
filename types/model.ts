// These are temporary for now - will be updated once we nail down the backend models

export type Song = {
    id: string,
    name: string,
    artist_id: string,
    length: number,
    description: string,
    file_uri: string,
    created_at: any, // TODO: change
    updated_at: any, // TODO: change
}