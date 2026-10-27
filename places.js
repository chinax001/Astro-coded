/* Indian places for the birth-place picker.
   Format: Name|latitude|longitude|aliases   (lines starting with # set the state)
   Any place not listed can be found with the "search online" option in the form. */
(function (root) {
  const RAW = `
# Andhra Pradesh
Visakhapatnam|17.69|83.22|vizag,vishakhapatnam
Vijayawada|16.51|80.65|bezwada
Guntur|16.31|80.44
Nellore|14.44|79.99
Kurnool|15.83|78.04
Rajahmundry|17.00|81.80|rajamahendravaram
Tirupati|13.63|79.42
Kakinada|16.99|82.25
Kadapa|14.47|78.82|cuddapah
Anantapur|14.68|77.60
Eluru|16.71|81.10
Ongole|15.50|80.05
Machilipatnam|16.19|81.14|bandar,masulipatnam
Amaravati|16.51|80.52
Srikakulam|18.30|83.90
Vizianagaram|18.11|83.40
Chittoor|13.22|79.10
Hindupur|13.83|77.49
Proddatur|14.75|78.55
Bhimavaram|16.54|81.52
Tenali|16.24|80.64
Madanapalle|13.55|78.50
Dharmavaram|14.41|77.72
Nandyal|15.48|78.48
# Arunachal Pradesh
Itanagar|27.09|93.62
Tawang|27.59|91.86
Naharlagun|27.10|93.69
Pasighat|28.07|95.33
Ziro|27.55|93.83
# Assam
Guwahati|26.14|91.74|gauhati
Dibrugarh|27.48|94.91
Silchar|24.83|92.78
Jorhat|26.75|94.20
Nagaon|26.35|92.68
Tezpur|26.63|92.80
Tinsukia|27.49|95.36
Dispur|26.14|91.79
Bongaigaon|26.48|90.56
Goalpara|26.17|90.62
Karimganj|24.87|92.35
Diphu|25.84|93.43
# Bihar
Patna|25.59|85.14
Gaya|24.80|85.00
Bhagalpur|25.24|86.97
Muzaffarpur|26.12|85.39
Darbhanga|26.15|85.90
Purnia|25.78|87.47
Arrah|25.56|84.67|ara
Begusarai|25.42|86.13
Katihar|25.54|87.57
Munger|25.38|86.47|monghyr
Chhapra|25.78|84.73
Samastipur|25.86|85.78
Bettiah|26.80|84.50
Sasaram|24.95|84.03
Hajipur|25.69|85.21
Bodh Gaya|24.70|84.99
Motihari|26.65|84.92
Siwan|26.22|84.36
Aurangabad (Bihar)|24.75|84.37
Bihar Sharif|25.20|85.52|nalanda
Saharsa|25.88|86.60
Sitamarhi|26.59|85.49
Jehanabad|25.21|84.99
# Chandigarh
Chandigarh|30.73|76.78
# Chhattisgarh
Raipur|21.25|81.63
Bhilai|21.21|81.38
Bilaspur (Chhattisgarh)|22.08|82.15
Durg|21.19|81.28
Korba|22.35|82.68
Raigarh|21.90|83.40
Jagdalpur|19.07|82.03
Ambikapur|23.12|83.20
Rajnandgaon|21.10|81.03
Dhamtari|20.71|81.55
# Delhi
New Delhi|28.61|77.21|delhi
Delhi|28.70|77.10
# Goa
Panaji|15.50|73.83|panjim
Margao|15.27|73.96|madgaon
Vasco da Gama|15.40|73.81
Mapusa|15.59|73.81
Ponda|15.40|74.02
# Gujarat
Ahmedabad|23.02|72.57
Surat|21.17|72.83
Vadodara|22.31|73.18|baroda
Rajkot|22.30|70.80
Gandhinagar|23.22|72.65
Bhavnagar|21.76|72.15
Jamnagar|22.47|70.07
Junagadh|21.52|70.46
Anand|22.56|72.93
Nadiad|22.69|72.86
Bharuch|21.70|72.99|broach
Mehsana|23.60|72.37
Morbi|22.82|70.84
Porbandar|21.64|69.60
Palanpur|24.17|72.43
Valsad|20.59|72.93
Navsari|20.95|72.95
Bhuj|23.25|69.67
Surendranagar|22.73|71.64
Godhra|22.78|73.62
Patan|23.85|72.12
Amreli|21.60|71.22
Veraval|20.91|70.37
Dwarka|22.24|68.97
Vapi|20.37|72.91
Gandhidham|23.08|70.13
Vadnagar|23.78|72.64
Somnath|20.89|70.40
Palitana|21.52|71.82
Botad|22.17|71.67
Dahod|22.84|74.26
# Haryana
Gurugram|28.46|77.03|gurgaon
Faridabad|28.41|77.31
Panipat|29.39|76.97
Ambala|30.38|76.78
Karnal|29.69|76.99
Hisar|29.15|75.72
Rohtak|28.89|76.61
Sonipat|28.99|77.02
Yamunanagar|30.13|77.27
Kurukshetra|29.97|76.88
Panchkula|30.69|76.86
Bhiwani|28.79|76.13
Sirsa|29.53|75.03
Jind|29.32|76.31
Rewari|28.20|76.62
Kaithal|29.80|76.40
Fatehabad|29.51|75.45
Palwal|28.15|77.33
Narnaul|28.04|76.11
# Himachal Pradesh
Shimla|31.10|77.17|simla
Manali|32.24|77.19
Dharamshala|32.22|76.32
Solan|30.91|77.10
Mandi|31.71|76.93
Kullu|31.96|77.11
Bilaspur (Himachal)|31.34|76.76
Hamirpur (Himachal)|31.69|76.52
Una|31.47|76.27
Chamba|32.55|76.13
Kangra|32.10|76.27
Nahan|30.56|77.30
Reckong Peo|31.54|78.27|kinnaur
Palampur|32.11|76.54
# Jammu & Kashmir
Srinagar|34.08|74.80
Jammu|32.73|74.87
Anantnag|33.73|75.15
Baramulla|34.20|74.34
Udhampur|32.92|75.14
Kathua|32.37|75.52
Sopore|34.30|74.47
Kupwara|34.53|74.26
Pulwama|33.87|74.90
Poonch|33.77|74.10
Rajouri|33.38|74.31
# Ladakh
Leh|34.16|77.58
Kargil|34.56|76.13
# Jharkhand
Ranchi|23.34|85.31
Jamshedpur|22.80|86.20|tata nagar
Dhanbad|23.80|86.43
Bokaro|23.67|86.15
Deoghar|24.48|86.70
Hazaribagh|23.99|85.36
Giridih|24.19|86.30
Ramgarh|23.63|85.52
Medininagar|24.04|84.07|daltonganj
Dumka|24.27|87.25
Chaibasa|22.56|85.81
Phusro|23.78|85.99
Sahibganj|25.24|87.64
Lohardaga|23.43|84.68
# Karnataka
Bengaluru|12.97|77.59|bangalore
Mysuru|12.30|76.64|mysore
Hubballi|15.36|75.12|hubli
Mangaluru|12.91|74.86|mangalore
Belagavi|15.85|74.50|belgaum
Kalaburagi|17.33|76.83|gulbarga
Davanagere|14.47|75.92
Ballari|15.14|76.92|bellary
Vijayapura|16.83|75.71|bijapur
Shivamogga|13.93|75.57|shimoga
Tumakuru|13.34|77.10|tumkur
Raichur|16.21|77.36
Bidar|17.91|77.52
Hassan|13.00|76.10
Udupi|13.34|74.75
Mandya|12.52|76.90
Chitradurga|14.23|76.40
Kolar|13.14|78.13
Chikkamagaluru|13.32|75.77|chikmagalur
Hosapete|15.27|76.39|hospet
Gadag|15.43|75.63
Bagalkot|16.18|75.70
Karwar|14.81|74.13
Madikeri|12.42|75.74|coorg
Dharwad|15.46|75.01
Hampi|15.34|76.46
Koppal|15.35|76.15
Haveri|14.79|75.40
Chikkaballapur|13.43|77.73
Ramanagara|12.72|77.28
Sirsi|14.62|74.84
Gokarna|14.55|74.32
# Kerala
Thiruvananthapuram|8.52|76.94|trivandrum
Kochi|9.93|76.27|cochin
Kozhikode|11.26|75.78|calicut
Thrissur|10.53|76.21|trichur
Kollam|8.89|76.61|quilon
Kannur|11.87|75.37|cannanore
Alappuzha|9.49|76.34|alleppey
Palakkad|10.78|76.65|palghat
Kottayam|9.59|76.52
Malappuram|11.07|76.07
Kasaragod|12.50|74.99
Pathanamthitta|9.26|76.79
Idukki|9.85|76.97
Kalpetta|11.61|76.08|wayanad
Guruvayur|10.59|76.04
Thalassery|11.75|75.49|tellicherry
Muvattupuzha|9.99|76.58
Perinthalmanna|10.98|76.23
Ernakulam|9.98|76.29
Attingal|8.70|76.82
Varkala|8.73|76.72
Munnar|10.09|77.06
# Madhya Pradesh
Bhopal|23.26|77.41
Indore|22.72|75.86
Jabalpur|23.18|79.94|jubbulpore
Gwalior|26.22|78.18
Ujjain|23.18|75.78
Sagar|23.84|78.74
Dewas|22.97|76.05
Satna|24.60|80.83
Ratlam|23.33|75.04
Rewa|24.53|81.30
Katni|23.83|80.40|murwara
Singrauli|24.20|82.67
Burhanpur|21.31|76.23
Khandwa|21.83|76.35
Bhind|26.56|78.79
Chhindwara|22.06|78.94
Guna|24.65|77.31
Shivpuri|25.42|77.66
Vidisha|23.52|77.81
Chhatarpur|24.92|79.58
Damoh|23.84|79.44
Mandsaur|24.07|75.07
Khargone|21.82|75.61
Neemuch|24.47|74.87
Pithampur|22.61|75.70
Narmadapuram|22.75|77.72|hoshangabad
Itarsi|22.61|77.76
Sehore|23.20|77.08
Betul|21.91|77.90
Seoni|22.09|79.54
Datia|25.67|78.46
Morena|26.50|78.00
Panna|24.72|80.19
Balaghat|21.81|80.18
Mandla|22.60|80.37
Tikamgarh|24.74|78.83
Sidhi|24.40|81.88
Shajapur|23.43|76.27
Raisen|23.33|77.79
Maihar|24.27|80.76
Pachmarhi|22.47|78.43
# Maharashtra
Mumbai|19.08|72.88|bombay
Pune|18.52|73.86|poona
Nagpur|21.15|79.09
Nashik|20.00|73.79|nasik
Thane|19.22|72.98|thana
Chhatrapati Sambhajinagar|19.88|75.34|aurangabad
Solapur|17.66|75.91
Kolhapur|16.70|74.24
Amravati|20.93|77.75
Navi Mumbai|19.03|73.03
Sangli|16.85|74.57
Jalgaon|21.01|75.57
Akola|20.71|77.00
Latur|18.40|76.58
Dhule|20.90|74.77
Ahilyanagar|19.09|74.74|ahmednagar
Chandrapur|19.96|79.30
Parbhani|19.27|76.77
Jalna|19.84|75.88
Nanded|19.14|77.32
Satara|17.69|74.00
Beed|18.99|75.76
Yavatmal|20.39|78.12
Kalyan|19.24|73.13
Vasai|19.39|72.84
Ratnagiri|16.99|73.30
Wardha|20.75|78.60
Bhandara|21.17|79.65
Gondia|21.46|80.19
Dharashiv|18.19|76.04|osmanabad
Nandurbar|21.37|74.24
Buldhana|20.53|76.18
Washim|20.11|77.13
Hingoli|19.72|77.15
Gadchiroli|20.18|80.00
Sawantwadi|15.90|73.82|sindhudurg
Alibag|18.64|72.87
Panvel|18.99|73.11
Pimpri-Chinchwad|18.63|73.80
Malegaon|20.55|74.53
Bhiwandi|19.30|73.06
Mira-Bhayandar|19.28|72.86
Ulhasnagar|19.22|73.16
Shirdi|19.77|74.48
Lonavala|18.75|73.41
Baramati|18.15|74.58
Karad|17.29|74.18
Ichalkaranji|16.70|74.46
Pandharpur|17.68|75.33
Mahabaleshwar|17.92|73.66
Chiplun|17.53|73.52
# Manipur
Imphal|24.82|93.94
Thoubal|24.64|94.01
Churachandpur|24.33|93.68
Bishnupur (Manipur)|24.63|93.77
Ukhrul|25.12|94.36
# Meghalaya
Shillong|25.57|91.88
Tura|25.51|90.22
Jowai|25.45|92.20
Cherrapunji|25.30|91.70
# Mizoram
Aizawl|23.73|92.72
Lunglei|22.89|92.73
Champhai|23.46|93.33
Kolasib|24.22|92.68
# Nagaland
Kohima|25.67|94.11
Dimapur|25.91|93.73
Mokokchung|26.32|94.52
Tuensang|26.27|94.82
Wokha|26.10|94.26
# Odisha
Bhubaneswar|20.30|85.82|bhubaneshwar
Cuttack|20.46|85.88
Rourkela|22.26|84.85
Berhampur|19.31|84.79|brahmapur
Sambalpur|21.47|83.97
Puri|19.81|85.83
Balasore|21.49|86.93|baleshwar
Bhadrak|21.06|86.52
Baripada|21.93|86.72
Jharsuguda|21.86|84.01
Jeypore|18.86|82.57
Koraput|18.81|82.71
Angul|20.84|85.10
Dhenkanal|20.66|85.60
Kendujhar|21.63|85.58|keonjhar
Balangir|20.71|83.49|bolangir
Rayagada|19.17|83.42
Paradeep|20.32|86.61
Bargarh|21.33|83.62
Phulbani|20.47|84.23
Konark|19.89|86.09
Jajpur|20.85|86.33
# Puducherry
Puducherry|11.93|79.83|pondicherry
Karaikal|10.92|79.84
Mahe|11.70|75.54
Yanam|16.73|82.22
# Punjab
Ludhiana|30.90|75.86
Amritsar|31.63|74.87
Jalandhar|31.33|75.58
Patiala|30.34|76.39
Bathinda|30.21|74.95
Mohali|30.70|76.72|sas nagar
Pathankot|32.27|75.65
Hoshiarpur|31.53|75.91
Moga|30.82|75.17
Firozpur|30.93|74.61|ferozepur
Batala|31.82|75.20
Abohar|30.14|74.19
Barnala|30.38|75.55
Kapurthala|31.38|75.38
Sangrur|30.25|75.84
Faridkot|30.67|74.76
Fazilka|30.40|74.03
Muktsar|30.48|74.52
Rupnagar|30.97|76.53|ropar
Gurdaspur|32.04|75.40
Khanna|30.70|76.22
Phagwara|31.22|75.77
Malerkotla|30.53|75.88
Nabha|30.38|76.15
Tarn Taran|31.45|74.93
Anandpur Sahib|31.24|76.50
Zirakpur|30.64|76.82
# Rajasthan
Jaipur|26.91|75.79
Jodhpur|26.24|73.02
Udaipur (Rajasthan)|24.59|73.71
Kota|25.21|75.86
Ajmer|26.45|74.64
Bikaner|28.02|73.31
Alwar|27.55|76.63
Bharatpur|27.22|77.49
Sikar|27.61|75.14
Pali|25.77|73.32
Bhilwara|25.35|74.64
Sri Ganganagar|29.92|73.88
Jhunjhunu|28.13|75.40
Tonk|26.17|75.79
Barmer|25.75|71.40
Hanumangarh|29.58|74.32
Chittorgarh|24.88|74.63
Churu|28.30|74.97
Nagaur|27.20|73.74
Jaisalmer|26.92|70.92
Banswara|23.55|74.44
Dungarpur|23.84|73.71
Bundi|25.44|75.64
Dausa|26.89|76.56
Sawai Madhopur|26.02|76.35
Jalore|25.35|72.62
Sirohi|24.89|72.86
Karauli|26.50|77.02
Dholpur|26.70|77.89
Baran|25.10|76.51
Jhalawar|24.60|76.16
Rajsamand|25.07|73.88
Pratapgarh (Rajasthan)|24.03|74.78
Mount Abu|24.59|72.71
Pushkar|26.49|74.55
Beawar|26.10|74.32
Kishangarh|26.57|74.86
Hindaun|26.73|77.03
Sujangarh|27.70|74.47
Phalodi|27.13|72.37
Ratangarh|28.08|74.62
Bhiwadi|28.21|76.86
# Sikkim
Gangtok|27.33|88.61
Namchi|27.17|88.36
Gyalshing|27.29|88.26
Mangan|27.51|88.53
# Tamil Nadu
Chennai|13.08|80.27|madras
Coimbatore|11.02|76.96|kovai
Madurai|9.93|78.12
Tiruchirappalli|10.79|78.70|trichy,trichinopoly
Salem|11.66|78.15
Tirunelveli|8.73|77.70|nellai
Tiruppur|11.11|77.34
Erode|11.34|77.72
Vellore|12.92|79.13
Thoothukudi|8.76|78.13|tuticorin
Thanjavur|10.79|79.14|tanjore
Dindigul|10.37|77.98
Cuddalore|11.75|79.77
Kanchipuram|12.83|79.70|conjeevaram
Nagercoil|8.18|77.43
Kumbakonam|10.96|79.38
Karur|10.96|78.08
Hosur|12.74|77.83
Rameswaram|9.29|79.31
Namakkal|11.22|78.17
Sivakasi|9.45|77.80
Tiruvannamalai|12.23|79.07
Pollachi|10.66|77.01
Ooty|11.41|76.70|udhagamandalam
Kodaikanal|10.24|77.49
Pudukkottai|10.38|78.82
Ambur|12.79|78.72
Nagapattinam|10.77|79.84
Virudhunagar|9.59|77.96
Ramanathapuram|9.37|78.83
Krishnagiri|12.52|78.21
Dharmapuri|12.13|78.16
Perambalur|11.23|78.88
Ariyalur|11.14|79.08
Tiruvarur|10.77|79.64
Theni|10.01|77.48
Mayiladuthurai|11.10|79.65
Chengalpattu|12.69|79.98
Tambaram|12.92|80.12
Avadi|13.11|80.10
Kanyakumari|8.08|77.54
Arakkonam|13.08|79.67
Palani|10.45|77.52
Karaikudi|10.07|78.78
# Telangana
Hyderabad|17.39|78.49
Secunderabad|17.44|78.50
Warangal|17.97|79.59
Nizamabad|18.67|78.09
Karimnagar|18.44|79.13
Khammam|17.25|80.15
Ramagundam|18.76|79.51
Mahbubnagar|16.74|77.99
Nalgonda|17.06|79.27
Adilabad|19.67|78.53
Suryapet|17.14|79.62
Siddipet|18.10|78.85
Mancherial|18.87|79.46
Miryalaguda|16.87|79.57
Medak|18.05|78.26
Sangareddy|17.62|78.09
Jagtial|18.79|78.91
Kamareddy|18.32|78.34
Bhadrachalam|17.67|80.89
Kothagudem|17.55|80.62
Vikarabad|17.34|77.90
Wanaparthy|16.36|78.06
# Tripura
Agartala|23.83|91.28
Udaipur (Tripura)|23.53|91.49
Dharmanagar|24.37|92.17
Kailasahar|24.33|92.00
Belonia|23.25|91.45
# Uttar Pradesh
Lucknow|26.85|80.95
Kanpur|26.45|80.35|cawnpore
Varanasi|25.32|82.97|benares,banaras,kashi
Agra|27.18|78.01
Prayagraj|25.44|81.85|allahabad
Meerut|28.98|77.71
Ghaziabad|28.67|77.45
Noida|28.54|77.39
Greater Noida|28.47|77.50
Bareilly|28.37|79.43
Aligarh|27.88|78.08
Moradabad|28.84|78.78
Gorakhpur|26.76|83.37
Saharanpur|29.96|77.55
Jhansi|25.45|78.57
Mathura|27.49|77.67
Vrindavan|27.58|77.70
Firozabad|27.15|78.39
Muzaffarnagar|29.47|77.70
Ayodhya|26.80|82.20|faizabad
Rampur|28.80|79.03
Shahjahanpur|27.88|79.91
Farrukhabad|27.39|79.58
Mirzapur|25.14|82.57
Etawah|26.78|79.02
Azamgarh|26.07|83.19
Sultanpur|26.26|82.07
Jaunpur|25.75|82.68
Basti|26.80|82.73
Bulandshahr|28.41|77.85
Hapur|28.73|77.78
Unnao|26.55|80.49
Raebareli|26.23|81.23|rae bareli
Lakhimpur Kheri|27.95|80.78
Sitapur|27.57|80.68
Hardoi|27.40|80.13
Budaun|28.04|79.12
Orai|25.99|79.45
Banda|25.48|80.34
Mau|25.94|83.56
Ballia|25.76|84.15
Deoria|26.50|83.78
Ghazipur|25.58|83.58
Bijnor|29.37|78.14
Amroha|28.90|78.47
Sambhal|28.59|78.57
Pilibhit|28.63|79.80
Fatehpur|25.93|80.81
Chitrakoot|25.20|80.88
Gonda|27.13|81.96
Bahraich|27.57|81.60
Barabanki|26.93|81.19
Mainpuri|27.23|79.02
Etah|27.56|78.66
Hathras|27.60|78.05
Kasganj|27.81|78.65
Lalitpur|24.69|78.41
Maharajganj|27.14|83.56
Kushinagar|26.74|83.89
Siddharthnagar|27.29|83.09
Akbarpur|26.43|82.54|ambedkar nagar
Mughalsarai|25.28|83.12|pt deen dayal upadhyaya
Shamli|29.45|77.31
Baghpat|28.94|77.22
Auraiya|26.46|79.51
Kannauj|27.05|79.92
Hamirpur (Uttar Pradesh)|25.96|80.15
Mahoba|25.29|79.87
# Uttarakhand
Dehradun|30.32|78.03|dehra dun
Haridwar|29.95|78.16
Roorkee|29.85|77.89
Haldwani|29.22|79.51
Rudrapur|28.98|79.40
Kashipur|29.21|78.96
Rishikesh|30.09|78.27
Nainital|29.38|79.46
Almora|29.60|79.66
Mussoorie|30.46|78.07
Pithoragarh|29.58|80.22
Kotdwar|29.75|78.52
Pauri|30.15|78.78
New Tehri|30.38|78.43|tehri
Uttarkashi|30.73|78.44
Bageshwar|29.84|79.77
Champawat|29.34|80.09
Ranikhet|29.64|79.43
Srinagar (Uttarakhand)|30.22|78.78
Gopeshwar|30.41|79.32|chamoli
Rudraprayag|30.28|78.98
Kedarnath|30.74|79.07
Badrinath|30.74|79.49
# West Bengal
Kolkata|22.57|88.36|calcutta
Howrah|22.59|88.31
Durgapur|23.55|87.31
Asansol|23.68|86.98
Siliguri|26.73|88.43
Bardhaman|23.23|87.86|burdwan
Malda|25.01|88.14|english bazar
Baharampur|24.10|88.25|berhampore
Habra|22.84|88.65
Kharagpur|22.35|87.23
Shantipur|23.25|88.44
Dankuni|22.68|88.30
Darjeeling|27.04|88.26
Jalpaiguri|26.52|88.72
Cooch Behar|26.32|89.45
Krishnanagar|23.40|88.50
Haldia|22.07|88.07
Raiganj|25.62|88.13
Bankura|23.23|87.07
Purulia|23.33|86.36
Midnapore|22.42|87.32|medinipur
Balurghat|25.22|88.77
Bolpur|23.67|87.72
Santiniketan|23.68|87.68
Basirhat|22.66|88.89
Barasat|22.72|88.48
Kalyani|22.98|88.43
Barrackpore|22.77|88.37
Chandannagar|22.87|88.37|chandernagore
Serampore|22.75|88.34
Contai|21.78|87.75
Tamluk|22.30|87.92
Alipurduar|26.49|89.53
Kalimpong|27.06|88.47
Jhargram|22.45|86.99
Digha|21.63|87.55
# Union Territories
Port Blair|11.62|92.73|andaman
Kavaratti|10.57|72.64|lakshadweep
Daman|20.41|72.83
Diu|20.71|70.99
Silvassa|20.27|73.02|dadra
`;

  let state = '';
  const list = [];
  RAW.split('\n').forEach(line => {
    line = line.trim();
    if (!line) return;
    if (line[0] === '#') { state = line.slice(1).trim(); return; }
    const p = line.split('|');
    list.push({ n: p[0], s: state, lat: parseFloat(p[1]), lon: parseFloat(p[2]), a: (p[3] || '').toLowerCase() });
  });
  root.PLACES = list;
})(typeof window !== 'undefined' ? window : globalThis);
