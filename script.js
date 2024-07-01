function kirimWa() {
  const urlWa = `https://wa.me/6281615616752?text=My Name ${nama.value},\n ${email.value}, \n ID Game: ${id.value} , \n DM •${dm.value}•`;
  window.open(urlWa, "_blank");
}