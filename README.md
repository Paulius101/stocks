Sukurkite platformą skirtą biržos akcijoms (vartybiniams popieriams) valdyti.

Akcijos (Stock) modelis susideda iš šių atributų: 
* name: string - Kompanijos pavadinimas (pvz.: Apple) 
* code: string - Akcijos pavadinimas (pvz.: AAPL) 
* price: number - Akcijos vieneto kaina 
* previousPrice: number - Akcijos vieneto kaina praėjusią dieną 
* exchange: string - Biržos pavadinimas (pvz.: NASDAQ)
 * favorite: boolean - Atributas, kuris nurodo, ar akcija pridėta prie stebimų akcijų.

Platformos reikalavimai: 
* Atvaizduoti visas akcijas ir jų informaciją (favorite truksta)
* Galimybė peržiūrėti akcijos informaciją individualiai (unikaliam adrese (route))
* Galimybė pridėti akciją 
* Galimybė atnaujinti akcijos informacija 
* Sugalvokite savo papildomo funkcionalumo

Informacija apie serverį
Atsisiųskite archyvą (zip) ir jame rasite serverį, kurį galite pasileisti lokaliai. Serverį galite pasiekti adresu http://localhost:3000.

Serverio paleidimui naudokite šias komandas:
* npm install 
* node index.js

Galimi serverio resursai (endpoints): 
* GET /api/stock - grąžina visų egzistuojančių akcijų duomenis (JSON - stock modelių masyvą). 
* POST /api/stock - ledžia pridėti naują akciją. 
* PATCH /api/stock/:code - ledžia atnaujinti akciją pagal nurodytą kodą (atkreipkite dėmesį, kad kiekviena akcija turi savo unikalų kodą, o ne ID, pvz.: AAPL).