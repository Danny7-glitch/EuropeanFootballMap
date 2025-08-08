const clubs = [
  // Group A
  { name: "Manchester City", coords: [53.483959, -2.200294], group: "A", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
  { name: "Real Madrid", coords: [40.4531, -3.6883], group: "A", country: "Spain", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
  { name: "Red Bull Salzburg", coords: [47.8095, 13.0550], group: "A", country: "Austria", logo: "https://upload.wikimedia.org/wikipedia/en/9/94/FC_Red_Bull_Salzburg_logo.svg" },
  { name: "Celtic", coords: [55.8497, -4.2055], group: "A", country: "Scotland", logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Celtic_FC.svg" },

  // Group B
  { name: "Bayern Munich", coords: [48.2188, 11.6247], group: "B", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_(2017).svg" },
  { name: "Arsenal", coords: [51.5550, -0.1086], group: "B", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
  { name: "Benfica", coords: [38.7520, -9.1847], group: "B", country: "Portugal", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/SL_Benfica_logo.svg" },
  { name: "Copenhagen", coords: [55.6731, 12.5683], group: "B", country: "Denmark", logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/F.C._Copenhagen_logo.svg" },

  // Group C
  { name: "Paris Saint-Germain", coords: [48.8414, 2.2530], group: "C", country: "France", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" },
  { name: "Inter Milan", coords: [45.4781, 9.1240], group: "C", country: "Italy", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg" },
  { name: "Feyenoord", coords: [51.8939, 4.5230], group: "C", country: "Netherlands", logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/Feyenoord_logo.svg" },
  { name: "Galatasaray", coords: [41.0256, 28.9744], group: "C", country: "Turkey", logo: "https://upload.wikimedia.org/wikipedia/en/8/86/Galatasaray_S.K._Logo.svg" },

  // Group D
  { name: "Barcelona", coords: [41.3818, 2.154007], group: "D", country: "Spain", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" },
  { name: "Napoli", coords: [40.8296, 14.1935], group: "D", country: "Italy", logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/SSC_Napoli.svg" },
  { name: "Union Berlin", coords: [52.4753, 13.4576], group: "D", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/1._FC_Union_Berlin_logo.svg" },
  { name: "Club Brugge", coords: [51.2085, 3.2199], group: "D", country: "Belgium", logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Club_Brugge_KV_logo.svg" },

  // Group E
  { name: "Atletico Madrid", coords: [40.4362, -3.5995], group: "E", country: "Spain", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg" },
  { name: "Lazio", coords: [41.9339, 12.4534], group: "E", country: "Italy", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/S.S._Lazio_badge.svg" },
  { name: "Shakhtar Donetsk", coords: [50.4501, 30.5234], group: "E", country: "Ukraine", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/FC_Shakhtar_Donetsk_logo.svg" },
  { name: "Young Boys", coords: [46.9481, 7.4474], group: "E", country: "Switzerland", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/BSC_Young_Boys_logo.svg" },

  // Group F
  { name: "AC Milan", coords: [45.4781, 9.1240], group: "F", country: "Italy", logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/Logo_of_AC_Milan.svg" },
  { name: "Borussia Dortmund", coords: [51.4926, 7.4519], group: "F", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Borussia_Dortmund_logo.svg" },
  { name: "Newcastle United", coords: [54.9756, -1.6216], group: "F", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg" },
  { name: "Porto", coords: [41.1603, -8.5830], group: "F", country: "Portugal", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg" },

  // Group G
  { name: "RB Leipzig", coords: [51.3457, 12.3731], group: "G", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg" },
  { name: "Manchester United", coords: [53.4631, -2.2913], group: "G", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" },
  { name: "PSV Eindhoven", coords: [51.4416, 5.4697], group: "G", country: "Netherlands", logo: "https://upload.wikimedia.org/wikipedia/en/8/87/PSV_Eindhoven.svg" },
  { name: "Antwerp", coords: [51.2194, 4.4025], group: "G", country: "Belgium", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Royal_Antwerp_FC_logo.svg" },

  // Group H
  { name: "Sevilla", coords: [37.3841, -5.9707], group: "H", country: "Spain", logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg" },
  { name: "Lens", coords: [50.4319, 2.8276], group: "H", country: "France", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/RC_Lens_logo.svg" },
  { name: "Galatasaray", coords: [41.0256, 28.9744], group: "H", country: "Turkey", logo: "https://upload.wikimedia.org/wikipedia/en/8/86/Galatasaray_S.K._Logo.svg" },
  { name: "Union Saint-Gilloise", coords: [50.8167, 4.3125], group: "H", country: "Belgium", logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Royale_Union_Saint-Gilloise_logo.svg
