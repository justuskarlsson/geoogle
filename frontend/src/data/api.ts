const DEV_HOST = "http://localhost:8000";

async function api(path: string, options: RequestInit) {
    const url = DEV_HOST + path;
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch(e) {
        console.error(`${url}: ${e}`);
        throw e;
    }
}

interface FormBodyMap {
    [key: string]: string | Blob
};

async function api_form(path: string, body: FormBodyMap) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)){
        formData.append(key, value);
    }

    return api(path, {
        method: "POST",
        // mode: 'no-cors', // no-cors, *cors, same-origin
        body: formData
    });
}

async function api_json(path: string, body: any) {

    return api(path, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        // mode: 'no-cors', // no-cors, *cors, same-origin
        body: JSON.stringify(body)
    });
}

export async function api_nearest_k(imageBlob: Blob, k: number = 10){
    return api_form("/nearest-k", {
        "img": imageBlob,
        "extension": ".png",
        "k": k.toString()
    })
    // return api_json("/nearest-k", {
    //     "img": imageBlob,
    //     "extension": ".png",
    //     "k": k
    // })
} 