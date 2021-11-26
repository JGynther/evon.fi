export default function template(data) {
  return `
<div>
  <h3>Hei ${data.name.split(" ")[0]}!</h3>

  <p>
      Kiitos merkinnästäsi ja tervetuloa mukaan! Voit suorittaa merkitsemiesi osakkeiden maksun yrityksen pankkitilille tämän sähköpostin ohjeiden mukaisesti.
  </p>

  <p>Mikäli tämän osalta on jotain epäselvää tai ongelmia, ota yhteyttä sähköpostitse <a href="mailto:info@evon.fi">info@evon.fi</a></p>

  <p>Osakeannin ehtoihin voit vielä tutustua osoitteessa <a href="https:evon.fi/osakeannin_ehdot.pdf">evon.fi/osakeannin_ehdot.pdf</a></p>

  <p>Halutessasi, voit myös liittyä uusia osakkeitamme varten suunnattuun WhatsApp -ryhmään tällä linkillä: <a href="https://chat.whatsapp.com/L9Iu4T2FYl51arYvDdtmoK">chat.whatsapp.com/L9Iu4T2FYl51arYvDdtmoK</a></p>
  <br>

  <h3>Merkinnän tiedot</h3>
  <table style="width:100%;">
      <tbody>
          <tr style="">
              <td style="border:solid black;border-width: 2px 2px 0px 2px;padding:5px 10px 0px 10px;font-size:12px">Nimi</td>
              <td style="border:solid black;border-width: 2px 0px 0px 0px;padding:5px 10px 0px 10px;font-size:12px">Osakkeiden lukumäärä</td>
              <td style="border:solid black;border-width: 2px 2px 0px 2px;padding:5px 10px 0px 10px;font-size:12px">Merkintä (euroa)</td>
          </tr>
          <tr>
              <td style="border:solid black;border-width:0px 2px 0px 2px;padding:0px 10px 0px 10px;font-size:16px;">${
                data.name
              }</td>
              <td style="border:solid black;border-width:0px 0px 2px 0px;padding:0px 10px 5px 10px;font-size:16px;">${
                data.stock
              }</td>
              <td style="border:solid black;border-width:0px 2px 2px 2px;padding:0px 10px 5px 10px;font-size:16px;">${
                data.stock * 0.3
              } EUR</td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 0px 2px;padding:0px 10px 0px 10px;"><br></td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 0px 2px;padding:0px 10px 0px 10px;font-size:12px">Sähköposti</td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 0px 2px;padding:0px 10px 0px 10px;font-size:16px;">${
                data.email
              }</td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 0px 2px;padding:0px 10px 0px 10px;"><br></td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 0px 2px;padding:0px 10px 0px 10px;font-size:12px">Puhelinnumero</td>
          </tr>
          <tr>
              <td style="border:solid black;border-width: 0px 2px 2px 2px;padding:0px 10px 5px 10px;font-size:16px;">${
                data.phone
              }</td>
          </tr>
      </tbody>
  </table>

  <br><br>

  <table style="width:100%;">
      <tbody style="font-size:16px;">
          <tr style="border-top:2px dashed black;">
              <td style="font-size:12px;padding:5px 10px 0px 10px;">Saaja</td>
              <td style="border:dashed black;border-width:0px 2px 0px 2px;font-size:12px;padding:5px 10px 0px 10px;">Pankki</td>
              <td style="border:dashed black;border-width:0px 0px 0px 0px;font-size:12px;padding:5px 10px 0px 10px;">BIC</td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;font-size:12px;padding:5px 10px 0px 10px;">IBAN</td>
          </tr>
          <tr>
              <td style="padding:0px 10px 5px 10px;">Tree2u Oy</td>
              <td style="border:dashed black;border-width:0px 2px 2px 2px;padding:0px 10px 5px 10px;">Holvi</td>
              <td style="border:dashed black;border-width:0px 0px 2px 0px;padding:0px 10px 5px 10px;">HOLVFIHH</td>
              <td style="border:dashed black;border-width:0px 0px 2px 2px;padding:0px 10px 5px 10px;">FI16 7997 7995 3487 16</td>
          </tr>
          <tr>
              <td style="padding:0px 10px 0px 10px;">Rauhankatu 2F 69</td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;font-size:12px;padding:4px 10px 0px 10px;">Eräpäivä</td>
          </tr>
          <tr>
              <td style="padding:0px 10px 0px 10px;">13100 HÄMEENLINNA</td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;padding:0px 10px 0px 10px;">31.12.2021</td>
          </tr>
          <tr>
              <td style="padding:0px 10px 0px 10px;">FINLAND</td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;padding:0px 10px 0px 10px;"></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;font-size:12px;padding:0px 10px 0px 10px;">Viesti</td>
          </tr>
          <tr>
              <td style="font-size:12px;padding:0px 10px 0px 10px;">Y-tunnus</td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;padding:0px 10px 0px 10px;">Osakeanti ${
                data.name
              }</td>
          </tr>
          <tr>
              <td style="padding:0px 10px 0px 10px;">3094125-8</td>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:0px 0px 0px 2px;padding:0px 10px 0px 10px;"></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td style="border:dashed black;border-width:2px 0px 0px 2px;padding:5px 10px 0px 10px;"><b>Maksettava</b></td>
              <td style="border:dashed black;border-width:2px 0px 0px 0px;padding:5px 10px 0px 10px;">${
                data.stock * 0.3
              } EUR</td>
          </tr>
      </tbody>
    </table>

    <br>
</div>
`;
}
