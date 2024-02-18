let authData = {};
const $ = (id) => {
  return document.getElementById(id);
};
const formatPrice = (str) => {
  try {
    return (
      parseInt(str)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        .replace(".00", "")
        .replace(/,/g, ".") + "đ"
    );
  } catch (error) {}
  return str;
};

const getToken = () => {
  var details = Object.entries({
    client_id: "ca5899e1-aa95-432c-95e6-0389b0777f27",
    client_secret: "066BAFA59CA142B49AF3D3D5D9DD90A3DBC1A5B0",
    // client_id: "e0dd9d94-e724-4b9b-ad1b-784b59d2bbbc",
    // client_secret: "185934464D354D2A63F1C78BC7AB4C008F3DDBE5",
    grant_type: "client_credentials",
    scopes: "PublicApi.Access",
  })
    .map(([k, v]) => k + "=" + v)
    .join("&");
  return new Promise((resolve, reject) => {
    fetch("/api/id/connect/token", {
      method: "post",
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: details,
      // mode: "no-cors",
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res));
        resolve(res);
      })
      .catch(reject);
  });
};

const apiGetProducts = (
  payload = {
    orderBy: "createdDate",
    orderDirection: "asc",
    format: "json",
    currentItem: 1,
    pageSize: 6,
    includeInventory: "True",
    isActive: true,
    includePricebook: true,
    lastModifiedFrom: "2022-12-14",
    orderDirection: "desc",
  }
) => {
  return new Promise((resolve, reject) => {
    fetch(
      `/api/public/products?${Object.entries(payload)
        .map(([k, v]) => k + "=" + v)
        .join("&")}`,
      {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: authData.token_type + " " + authData.access_token,
          Retailer: "hethongvapedonganh",
        },
        // body: details,
        // mode: "no-cors",
      }
    )
      .then((res) => {
        if (res.status == 401) {
          localStorage.clear();
          window.location.reload();
        }
        return res.json();
      })
      .then(resolve)
      .catch(reject);
  });
};

const renderProductItem = (item) => {
  console.log(item.images, "item.images");
  return `<div class="item grid__item large--two-twelfths medium--one-third small--one-half">
	<div class="product-item">
	<div class="product-img">
		<a href="/product?code=${item.code}">
			<img id="1047133368" 
      class='lazyload' 
      width="112" 
      height="130" 
      data-src="${
        item.images?.[0] ||
        "//product.hstatic.net/200000019872/product/mob_liquid_blitzstein_guava_menthol_salt_nic_e9d926943242491898781215f486bac0_medium.png"
      }" 
      alt="Mob Liquid Blitzstein Guava Menthol Salt Nic (30ml)(Ổi Lạnh)">
		</a>
		<div class="product-tagshethang"></div>
		<div class="product-tags"></div>
	</div>
	<div class="product-tagname">
		<div>
			<a href="collections/all/index_Mob%20Liquid.html">${item.categoryName}</a>
		</div>
	</div>
	<div class="product-review-star text-center"></div>
	<div class="product-title">
		<a href="/product?code=${item.code}">${item.fullName}</a>
	</div>
	<div class="product-price clearfix">
		<span class="current-price">${formatPrice(item.basePrice)}</span>
	</div>
	</div>
</div>`;
};

{
  /* <div
  class="item grid__item large--two-twelfths medium--one-third small--one-third"
>
  <div class="product-item">
    <div class="product-img">
      <a href="products/daddy-s-juice-no-5-salt-nic-30ml.html">
        <img
          id="1052385155"
          class="lazyload"
          width="112"
          height="130"
          data-src="//product.hstatic.net/200000019872/product/daddy_s_juice_no.5_salt_nic_997bc1556bf34df99765fb21e5311f5f_medium.png"
          alt="Daddy's Juice No.5 Salt Nic (30ml)(Xoài dứa đào)"
        />
      </a>
      <div class="product-tagshethang"></div>
      <div class="product-tags"></div>
    </div>
    <div class="product-tagname">
      <div>
        <a href="collections/all/index_5050.html">50:50</a>-
        <a href="collections/all/index_Salt%20Nic.html"
          >Salt Nic</a
        >- <a href="collections/all/index_30ml.html">30ml</a>-
        <a href="collections/all/index_Daddy%27s%20Juice.html"
          >Daddy's Juice</a
        >-
        <a href="collections/all/index_Fruity.html">Fruity</a>-
        <a href="collections/all/index_M%E1%BB%B9.html">Mỹ</a>-
      </div>
    </div>
    <div class="product-review-star text-center"></div>
    <div class="product-title">
      <a href="products/daddy-s-juice-no-5-salt-nic-30ml.html"
        >Daddy's Juice No.5 Salt Nic (30ml)(Xoài dứa đào)</a
      >
    </div>
    <div class="product-price clearfix">
      <span class="current-price">320,000₫</span>
    </div>
  </div>
</div> */
}

const renderProductItem2 = (item) => {
  console.log(item.images, "item.images");
  return `<div
  class="item grid__item large--two-twelfths medium--one-third small--one-third"
>
  <div class="product-item">
    <div class="product-img">
      <a href="/product?code=${item.code}">
        <img
          id="1052385155"
          class="lazyload"
          width="112"
          height="130"
          data-src="${
            item.images?.[0] ||
            "//product.hstatic.net/200000019872/product/daddy_s_juice_no.5_salt_nic_997bc1556bf34df99765fb21e5311f5f_medium.png"
          }"
          alt="Daddy's Juice No.5 Salt Nic (30ml)(Xoài dứa đào)"
        />
      </a>
      <div class="product-tagshethang"></div>
      <div class="product-tags"></div>
    </div>
    <div class="product-tagname">
      <div>
        <a href="collections/all/index_Salt%20Nic.html"
          >Salt Nic</a
        >- <a href="collections/all/index_30ml.html">30ml</a>-
        <a href="collections/all/index_Daddy%27s%20Juice.html"
          >Daddy's Juice</a
        >-
        <a href="collections/all/index_Fruity.html">Fruity</a>-
        <a href="collections/all/index_M%E1%BB%B9.html">Mỹ</a>-
      </div>
    </div>
    <div class="product-review-star text-center"></div>
    <div class="product-title">
      <a href="/product?code=${item.code}">${item.fullName}</a>
    </div>
    <div class="product-price clearfix">
      <span class="current-price">${formatPrice(item.basePrice)}</span>
    </div>
  </div>
</div>`;
};

const running = async () => {
  authData = await localStorage.getItem("auth");
  if (!authData) {
    authData = await getToken();
  } else {
    authData = JSON.parse(authData);
  }

  console.log("success...");

  const products = await apiGetProducts();
  // const newProducts = await apiGetProducts({
  //   orderBy: "createdDate",
  //   orderDirection: "desc",
  // });
  const thirdProducts = await apiGetProducts({
    orderBy: "createdDate",
    orderDirection: "desc",
    pageSize: 6,
  });
  console.log(products, "products", thirdProducts);
  if (products) {
    document.getElementById("home-news-product-list").innerHTML = products.data
      .map((item) => renderProductItem(item))
      .join("");
    document.getElementById("home-news-product-list2").innerHTML = products.data
      .map((item) => renderProductItem2(item))
      .join("");
  }
  if (thirdProducts) {
    document.getElementById("home-third-product-list").innerHTML =
      thirdProducts.data.map((item) => renderProductItem(item)).join("");
    document.getElementById("home-third-product-list2").innerHTML =
      thirdProducts.data.map((item) => renderProductItem2(item)).join("");
  }
  // if (newProducts) {
  //   document.getElementById("id-product-list-new").innerHTML = newProducts.data
  //     .map((item) => renderProductItem(item))
  //     .join("");
  // }

  console.log(authData, "authData");

  if (window.location.search.includes("p=success")) {
    $("popup-success").style.display = "block";
    setTimeout(() => {
      $("popup-success").style.display = "none";
    }, 3000);
  }
};

running();
