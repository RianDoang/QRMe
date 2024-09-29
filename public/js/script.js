// Input QR
const urlInput = document.getElementById("urlInput");
const textInput = document.getElementById("textInput");
const data = document.getElementById("data");

data.placeholder = "Enter your website";

textInput.addEventListener("click", () => {
  data.placeholder = "Enter your name";
  textInput.classList.add("bg-slate-500");
  textInput.classList.remove("bg-transparent");
  urlInput.classList.remove("bg-slate-500");
  urlInput.classList.add("bg-transparent");
  data.value = "";
  delete op.image;
  clearQRCode();
});

urlInput.addEventListener("click", () => {
  data.placeholder = "Enter your website";
  urlInput.classList.add("bg-slate-500");
  urlInput.classList.remove("bg-transparent");
  textInput.classList.remove("bg-slate-500");
  textInput.classList.add("bg-transparent");
  data.value = "";
  delete op.image;
  clearQRCode();
});
// End Input QR

// QR Code program
const textEl = document.querySelector("#data");
const logoEl = document.querySelector("#logo");
const logoA = document.querySelector(".fileUpload");
const clearEl = document.querySelector("#clear");
const dotModeEl = document.querySelector("#dot");
const dotColorEl1 = document.querySelector("#dot-color-1");
const dotColorEl2 = document.querySelector("#dot-color-2");
const bgEl = document.querySelector("#bg-color");
const dlEl = document.querySelector("#btn-dl");
const loadingCanvas = document.getElementById("loadingCanvas");
const canvasEl = document.getElementById("canvas");

let op = {
  width: 150,
  height: 150,
  type: "jpg",
  data: "",
  image: "",
  dotsOptions: {
    color: "#4267b2",
    type: "square",
    gradient: {
      type: "linear",
      colorStops: [
        {
          offset: 0,
          color: "#000000",
        },
        {
          offset: 1,
          color: "#000",
        },
      ],
    },
  },
  backgroundOptions: {
    color: "#fff",
  },
};

// Render QRCode
function render() {
  if (op.data) {
    qrCode = new QRCodeStyling(op);
    canvasEl.innerHTML = "";
    qrCode.append(canvasEl);
  }
}

// Clear QRCode
function clearQRCode() {
  canvasEl.innerHTML = "";
}

// Event listener untuk input
textEl.addEventListener("input", (e) => {
  const data = e.target.value.trim();
  op.data = data;

  if (!data) {
    // Hapus QRCode jika input kosong
    clearQRCode();
  } else {
    // Render ulang QRCode jika ada input
    render();
  }
});

// Dot Mode & Color
dotModeEl.addEventListener("change", (e) => {
  op.dotsOptions.type = e.target.value;
  render();
});

dotColorEl1.addEventListener("input", (e) => {
  op.dotsOptions.gradient.colorStops[0].color = e.target.value;
  render();
});

dotColorEl2.addEventListener("input", (e) => {
  op.dotsOptions.gradient.colorStops[1].color = e.target.value;
  render();
});

// Background color
bgEl.addEventListener("input", (e) => {
  op.backgroundOptions.color = e.target.value;
  render();
});

// Logo upload
function browse() {
  logoEl.click();
}

logoEl.addEventListener("change", (e) => {
  let file = e.target.files[0];
  if (
    file &&
    (file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png")
  ) {
    let reader = new FileReader();
    reader.onload = () => {
      op.image = reader.result;
      render();
    };
    reader.readAsDataURL(file);
  } else {
    alert(
      "Format file tidak valid. Harap unggah file dengan format jpg, jpeg, atau png."
    );
  }
});

// Clear image
clearEl.addEventListener("click", () => {
  delete op.image;
  render();
});

// Download QR code
dlEl.addEventListener("click", (e) => {
  qrCode.download({
    name: textEl.value + " (QRMe QR)",
    extenstion: "jpg, svg, png, jpeg",
  });
});
