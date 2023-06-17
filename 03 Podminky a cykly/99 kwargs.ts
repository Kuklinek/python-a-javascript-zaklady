function funkceKteraBereTunuArgumentu({ jmeno, prijmeni, vek, velikostBoty }: {
  jmeno: string;
  prijmeni?: string;
  vek?: number;
  velikostBoty?: number;
}) {
  console.log(
    `Občan ${jmeno} ${prijmeni ?? "Novák"} má ve svých ${
      vek ?? 69
    } letech velikost boty ${velikostBoty ?? 41}`,
  );
}

funkceKteraBereTunuArgumentu({ jmeno: "Filip" })
funkceKteraBereTunuArgumentu({ jmeno: "Jan", velikostBoty: 39 })
