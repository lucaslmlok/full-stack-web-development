import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async({ request, resolve }) => {
    if (request.url.searchParams.has("_method")) {
        request.method = request.url.searchParams.get("_method").toUpperCase();
    }

    return await resolve(request);
}