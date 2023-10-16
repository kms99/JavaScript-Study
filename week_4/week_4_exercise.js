class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  // promise 반환
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() {
    let title;
    let res;
    while(true) {
        title = prompt("애니메이션 제목을 입력하세요.", "naruto");
        try{
            res = await loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`);
            break;

        }catch(err){}
    }
    alert(`${res.character}: ${res.quote}.`);
    return res;
}

narutoIsNotOtaku();
