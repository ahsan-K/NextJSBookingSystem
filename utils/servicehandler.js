

export default async function (url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


export const post = async function (url, data) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body:JSON.stringify(data)
    });
    const jsonData = await response.json();
    console.log(jsonData, 'ssss')
    alert(jsonData.message)
    return jsonData
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

