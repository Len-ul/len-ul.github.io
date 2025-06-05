//获取用户位置信息
axios.get('https://api.ip.sb/geoip', { timeout: 3000 })
    .then(function(response) {
        const data = response.data;
        let location = data.city || "";
        if (data.region) location = location ? location + ", " + data.region : data.region;
        if (data.country) location = location ? location + ", " + data.country : data.country;
        if (data.country_code === "CN") {
            location = data.city ? data.city + ", 🇨🇳 中国" : "🇨🇳 中国";
        }
        if (data.country_code === "HK") {
            location = "🇭🇰 香港";
        }
        document.getElementById("cdn").innerHTML = location || "未知位置";
        })
    .catch(function(error) {
        document.getElementById("cdn").innerHTML = "无法获取位置信息";
    });

