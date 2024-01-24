import { useRef, useState } from "react";
import Paragraph from "./components/Paragraph";

const PARAGRAPHs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ultrices velit. Sed nec justo eu quam commodo tristique. In hac habitasse platea dictumst. Fusce tristique, justo a blandit imperdiet, augue sapien aliquet odio, ut ultricies ligula libero vitae felis.",
  "Proin tincidunt elit non justo vestibulum, vitae consectetur odio dignissim. Quisque facilisis, urna ac congue bibendum, eros justo malesuada orci, id viverra odio leo vel urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Duis id turpis sit amet mauris aliquet eleifend. Nullam id velit vitae metus hendrerit iaculis. Maecenas varius, risus vel accumsan malesuada, nunc mauris varius lacus, vitae suscipit lacus augue at sapien. Fusce eu sapien a nisl gravida eleifend.",
  "Suspendisse potenti. Vivamus ut libero id elit vestibulum cursus nec vel ligula. Sed ullamcorper libero ut massa feugiat, at volutpat orci iaculis. Praesent vel justo vitae nunc fermentum iaculis.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius purus a augue condimentum, vel volutpat est vulputate. Sed eget interdum urna. Vestibulum dapibus nulla vel turpis tristique commodo.",
  "Quisque gravida libero ac justo luctus, vel congue dui pellentesque. Nulla facilisi. Mauris et risus eu nisi blandit vestibulum. Maecenas sed orci vel metus facilisis commodo vel vitae ligula. Sed eu efficitur erat.",
  "Fusce euismod, turpis eget posuere vulputate, purus justo pharetra neque, at consequat turpis eros non elit. Fusce ac tincidunt urna. Quisque non leo quis justo viverra ultricies a in quam. Nam feugiat sollicitudin sapien, eu varius elit eleifend vel.",
  "Nam vitae dolor id justo sagittis tristique. Integer eu tristique enim, at condimentum elit. In ac arcu vel orci elementum volutpat vel vitae nisl. Duis nec fermentum odio, non aliquet erat.",
  "Cras vehicula, velit eget scelerisque scelerisque, ipsum risus bibendum ligula, in consequat quam eros non velit. In euismod accumsan nulla, nec ultrices augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Donec pharetra tortor non odio finibus, non posuere libero facilisis. Vestibulum auctor leo id libero varius, et vehicula elit euismod. Sed non augue eget justo fringilla facilisis. Integer efficitur vel nulla in varius.",
  "Vivamus vel arcu vitae quam fringilla ultricies. Sed quis nibh nec nisl mattis congue. Integer tincidunt, purus ut malesuada tempor, velit metus pharetra metus, sit amet posuere lacus tellus et leo.",
  "Etiam in arcu sit amet felis fermentum luctus a ut justo. Sed id sapien in odio laoreet aliquet. Nam id venenatis est. Duis at mauris eu justo consequat suscipit vel ut orci.",
  "Pellentesque in ante sit amet leo bibendum imperdiet. Vivamus eu ligula vel odio fermentum dictum. Fusce euismod vulputate eros vel tincidunt. Integer gravida, augue eget iaculis hendrerit, sapien tellus lacinia elit, eget laoreet justo tortor ut justo.",
  "Integer feugiat justo eu ligula bibendum, vel luctus velit malesuada. Ut ultricies lacinia erat, nec rhoncus elit vulputate a. Vestibulum sed dapibus felis. Nam hendrerit, metus in egestas tristique, elit dui pellentesque dui, vel pellentesque metus tellus nec felis.",
  "Quisque ut tincidunt elit. Morbi tristique sapien in tortor semper, vel ultricies mauris auctor. Fusce eu lobortis odio. Sed quis augue eget nulla facilisis cursus.",
  "Praesent eleifend, justo vel accumsan sagittis, ligula dolor sollicitudin quam, eu tincidunt nulla justo a tellus. Nullam imperdiet metus a augue malesuada, eu facilisis justo tincidunt. Ut in feugiat lacus. Proin vitae leo vel mi varius pellentesque.",
  "Nam euismod auctor metus, at pharetra ex. Aenean euismod metus nec neque pellentesque, vel hendrerit metus commodo. Quisque venenatis lacus quis enim dictum, at pulvinar mauris convallis. Vivamus fermentum vel risus vitae tincidunt.",
  "Suspendisse potenti. Maecenas in odio id quam fermentum dignissim at a neque. Fusce accumsan, leo vel egestas auctor, odio sem auctor turpis, a mattis purus mi non quam. Phasellus fermentum semper ex ut facilisis.",
  "Curabitur eu felis vitae justo cursus vestibulum. Aenean vel magna ut felis malesuada venenatis. Curabitur tincidunt urna ut ligula hendrerit, a egestas augue ultricies. Maecenas eget odio nec odio ullamcorper mattis.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac dapibus mauris. Ut et quam eget elit bibendum efficitur. In in dolor in ipsum fringilla varius. Fusce finibus tristique felis, vel euismod urna sagittis ut.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt odio in sagittis volutpat. Nulla auctor dictum magna, in malesuada sem vehicula nec. Etiam ac turpis auctor, cursus neque at, posuere elit. Integer tristique, tortor vel bibendum sagittis, est lacus euismod odio, eu fermentum elit ligula eu nunc.",
];

function App() {
  const [name, setName] = useState("");

  const inputNameRef = useRef(null);
  const lastParagraphRef = useRef(null);
  const firstElementRef = useRef(null);

  const paragraphRefs = useRef([]);

  const scrollToFirstElement = () => {
    firstElementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const scrollToLastParagraph = () => {
    lastParagraphRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContent = (index, firstWord) => {
    let url = new URL(
      `http://${window.location.hostname}:${window.location.port}`
    );
    window.location.assign(`${url}#${firstWord}`);
    paragraphRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "15%" }}>
          <div
            style={{
              position: "sticky",
              top: 25,
            }}
          >
            <h2 style={{ textAlign: "center" }}>MENU</h2>
            <ul>
              {PARAGRAPHs.map((paragraph, idx) => (
                <li
                  key={idx}
                  style={{ marginBottom: 12, listStyle: "none" }}
                  onClick={() =>
                    scrollToContent(
                      idx,
                      paragraph.slice(0, paragraph.indexOf(" "))
                    )
                  }
                >
                  <button>{paragraph.slice(0, paragraph.indexOf(" "))}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ flexBasis: "85%" }}>
          <h1 ref={firstElementRef}>useState</h1>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              console.log("event:", event);
              setName(event.target.value);
            }}
          />
          <h2>{name}</h2>
          <br />
          <h1>useRef</h1>
          <input
            ref={inputNameRef}
            type="text"
            onChange={(event) => {
              inputNameRef.current.value = event.target.value;
            }}
          />
          <h2>{inputNameRef.current?.value}</h2>
          <button
            onClick={() => {
              alert(inputNameRef.current?.value);
            }}
          >
            Alert REF
          </button>
          <br />

          <button onClick={scrollToLastParagraph}>Bottom</button>

          {PARAGRAPHs.map((content, index) => (
            <Paragraph
              key={index}
              id={index}
              ref={(el) => (paragraphRefs.current[index] = el)}
              handleClick={scrollToContent}
            >
              {content}
            </Paragraph>
          ))}

          <p>
            ﻿กรรมาชน คำสาปราเม็งโรแมนติคแซ็กพอเพียง ฮิโกะ
            ตรวจทานพาสเจอร์ไรส์คอนโดมิเนียม โดนัท ฟีดโคโยตีครัวซอง
            สหัสวรรษโอวัลตินวานิลาราเม็งปิกอัพ ซูม แรลลีบัสการันตีลิสต์โกะ
            มอบตัวแบนเนอร์ตุ๋ยมือถือ แบนเนอร์บ๋อยรีวิวหม่านโถวว้อดก้า
            ลาตินราสเบอร์รี โบตั๋นชะโนดฮันนีมูน โอเลี้ยง จิ๊กโก๋กาญจนาภิเษก โจ๋
            เคสเฟิร์มแพกเกจอันตรกิริยาเหมย อ่วม เสือโคร่ง
            รายชื่อสตีลเท็กซ์คาร์โก้จิ๊ก แต๋วโบ้ยเจได
            เจ๊าะแจ๊ะสวีทศิรินทร์หยวนมั้ง ลีเมอร์โฮสเตสคลาสสิก แพกเกจคอนแทค
            โหงวเฮ้งสแตนเลสโฮสเตสบ็อกซ์ เยอบีร่าสหรัฐม็อบอันตรกิริยาตัวตน
            วอล์กมาร์กยอมรับซีอีโอ รีสอร์ทป๋าโดมิโน ริกเตอร์กรีนแอ็กชั่นไตรมาส
            กราวนด์ไนท์ มอคคาเวสต์ออร์แกนิกแชมพูบอร์ด ช็อปเปอร์ลอร์ดลีกเลดี้
            โฮสเตสชัตเตอร์ยอมรับแฮปปี้โปสเตอร์ ช็อปเปอร์เทรด ยิมเซ็กส์บร็อคโคลี
          </p>

          <p>
            เด้อยูโร ซิ้ม ราเม็งมั้ง เซ็กซี่ไฮเทค มาร์กแอโรบิค แคนู
            เซลส์แมนเบบี้ปอดแหก เวอร์หลวงพี่ ปอดแหกละตินเฟอร์รี่เต๊ะไอซ์
            เทคโนแครตซีดานเทอร์โบอ่อนด้อยเวิร์ลด์ โรลออนสลัม เดบิตคอร์ป
            ครัวซองเบอร์รี ﻿กรรมาชน ฮองเฮาเทเลกราฟไทเฮาสเตริโอ
            แคร์ก่อนหน้าถูกต้อง เพลย์บอยไอซ์ป๋า แคนูนิวดอกเตอร์แอ๊บแบ๊วฟรังก์
            เยอบีราปิกอัพ กรุ๊ปเจ๊วอฟเฟิลเอฟเฟ็กต์สตรอเบอรี
            ไชน่าอัลบัมอุปทานสเตอริโอ คาสิโนเด้อพูล
            กระดี๊กระด๊าแป๋วสตีลบาร์บีคิวฟลุก แรงดูดบาร์บี้มวลชนวาซาบิอิออน
            วีซ่าไคลแม็กซ์บู๊ ปอดแหก การันตี แช่แข็งสตูดิโอสเปกศึกษาศาสตร์
            ฮัลโลวีนปักขคณนากษัตริยาธิราชอุตสาหการคอนโดมิเนียม บ็อกซ์
            อาร์ติสต์แอลมอนด์ทอร์นาโดฮัลโหล โปสเตอร์ ฮิปฮอปรุมบ้าเคลียร์
            ไตรมาสโชว์รูมแอโรบิค ยูโร
          </p>

          <p>
            ยังไง ครัวซองต์เจ๊กรีนคาร์โก้พลาซ่า เห่ยโคโยตี้โอยัวะ
            ก่อนหน้าเวิลด์ซามูไร แมมโบ้โรแมนติกเฝอ โปรเจกเตอร์สะกอม
            แฟ็กซ์แบตมาเฟียแบ็กโฮเทรลเลอร์ แทคติคไฮเวย์ฮิอาข่า
            รีวิวพลาซ่าแพทยสภาโอยัวะ โมหจริตแตงกวาลีกบิ๊กเอนทรานซ์ รีไทร์
            โมหจริตดีไซน์หงวนควิก คาสิโนโปรโมเตอร์เซ็กส์ ตุ๊ดโอ้ยโมเดล
            สไตรค์ฉลุยกาญจนาภิเษกกราวนด์ ไฮไลต์ลาเต้โอวัลติน ยอมรับเวิลด์ถ่ายทำ
            ซูเอี๋ยตี๋อัลบัม ซีอีโอฟอยล์ ยอมรับ อุตสาหการโชห่วยลาเต้เวสต์แรลลี
            วินหมวย อัลไซเมอร์คาสิโนแคปเสกสรรค์ซินโดรม สี่แยก
            ชัตเตอร์บอมบ์เฟิร์มรีโมต นินจารูบิค สี่แยกแชมป์ ซาฟารีเทรดงี้ซูโม่
            ตุ๋ยช็อค เบิร์ดสตริงชัตเตอร์สโตนแฟรี ลิมิตคอนโดมิเนียม โอเลี้ยง
            อันเดอร์ โอยัวะลาเต้โปรเจ็กเตอร์พันธุวิศวกรรม
            คำสาปแฟ้บออร์แกนิคฟิวเจอร์
          </p>

          <p>
            แชมพูฟิวเจอร์ รองรับสไลด์มาเฟีย ออดิทอเรียมดิสเครดิต
            ชัวร์วิดีโอไฮเปอร์โบตั๋น แอปเปิลสเก็ตช์ไอเดียเฝอ
            บร็อคโคลีเท็กซ์โต๋เต๋ตุ๋ยคอมพ์ มวลชนซัมเมอร์แอพพริคอทซาร์ดีน
            เพรียวบางทอล์คซัมเมอร์มาร์เก็ตติ้งสไปเดอร์
            แรลลี่เวอร์โอวัลตินแฟนตาซี แรงใจพาเหรด เสือโคร่ง โฮสเตสอีแต๋นแซมบ้า
            ชิฟฟอน โมจิแอปเปิล เที่ยงคืนฮัลโหลคอนเซปต์เย้วคอนโดมิเนียม
            โบ้ยมัฟฟินทัวร์นาเมนท์ แก๊สโซฮอล์มือถือโทรตัวตน โกะสแล็ก
            แพทเทิร์นอัลไซเมอร์ โหงวเฮ้งน็อกเวอร์เทอร์โบ
            สตาร์ทโต๊ะจีนสลัมคันธาระ เทรลเล่อร์ พาร์ตเนอร์เกจิน็อก ปัจฉิมนิเทศ
            เกย์ ทอล์คแตงกวา เดบิต เกรดเป่ายิ้งฉุบตี๋เต๊ะ ว้อยสลัม
            เวิร์ลด์สตรอเบอร์รีนางแบบแฟร์ ออกแบบ ไฮกุ โฟมแชมป์หลวงตา
            แบล็กซูเปอร์ตัวตนเลสเบี้ยนเอ๋อ จิตพิสัย
          </p>

          <p>
            ปูอัดกุมภาพันธ์ธุหร่ำ แอพพริคอทสเปคซาร์ดีนเอฟเฟ็กต์แอสเตอร์ ฮาร์ด
            แซ็กโซโฟนคาร์หมายปองเพนตากอนโปร แบ็กโฮพาร์ตเนอร์สไปเดอร์คอนเซปต์
            ปัจเจกชนเกรย์สตรอเบอร์รีลิมิตแหวว มาร์เก็ตแยมโรลด็อกเตอร์มาร์เก็ต
            ก๊วนวโรกาส วอล์กลีเมอร์อุเทนมาร์ต ซามูไรนินจา ป๋านพมาศ เดบิต
            คอนเทนเนอร์เช็งเม้งเอาท์ดอร์ ตัวตนแตงกวาลิมูซีนพ่อค้าพูล ป๊อป
            คอลัมนิสต์ชะโนดรากหญ้า อาร์ติสต์ ปูอัด ทาวน์เฮาส์นอร์ทแอคทีฟ
            แฟรีเวสต์ยูโร กาญจนาภิเษกวานิลาเทปเบิร์ด ครัวซองมอบตัววอล์กรอยัลตี้
            โยโย่ทาวน์เฮาส์ลอร์ด ละตินแก๊สโซฮอล์ มั้งคอร์รัปชันชิฟฟอนเป่ายิงฉุบ
            ฮีโร่ไทยแลนด์ป๋อหลอ ภารตะ ศิรินทร์ ภูมิทัศน์ยอมรับ
            วานิลาตะหงิดซีนีเพล็กซ์รีไทร์โคโยตี้ เบนโตะ ตรวจสอบ
            น็อคเซอร์ไพรส์คาร์ บ๊วยตี๋นายแบบแฮมเบอร์เกอร์แหวว
            ทาวน์ทาวน์สป็อตโฟล์ค
          </p>

          <p>
            ผิดพลาดแฟ้บซาฟารีคอร์รัปชันออทิสติก หมวย แจ็กพ็อต
            โอเวอร์ดีไซน์จีดีพี เบิร์นแดรี่เลิฟวีไอพีแบนเนอร์ บอร์ดโมจิไพลิน
            เปเปอร์โต๋เต๋ออยล์ไมเกรนแอพพริคอท วาริชศาสตร์ โรลออนสกาย ซีน
            แล็บเปียโน วอฟเฟิลมวลชน เวิร์กช็อปต้าอ่วยอัลบัมซิม เบบี้ ทำงาน
            ธัมโมอัตลักษณ์โรลออน ริคเตอร์หมวยพาเหรด
            ซาร์ดีนสัมนาลอร์ดแก๊สโซฮอล์ธรรมาภิบาล หมั่นโถวป่าไม้ฟาสต์ฟู้ด
            ปอดแหกพาสเจอร์ไรส์ก๋ากั่น แมชีนวอร์รูม สแตนเลส แมชีน ตรวจทาน
            ราเมนช็อปโคโยตีสป็อตคอลัมน์ แอลมอนด์ด็อกเตอร์สโรชาเต๊ะโชห่วย
            ควิกสเกตช์แอปเปิ้ล พุดดิ้งสโตน โกลด์เท็กซ์เฟอร์รี่
            ดาวน์ฟลุกมาร์คฟลอร์ สโรชาสแควร์ ออโต้รองรับสแตนดาร์ดเซี้ยว
            หมั่นโถวมอบตัวท็อปบู๊ท แมชชีน แบตเยอบีร่าแชเชือนโต๋เต๋พาร์
          </p>

          <p>
            อุปการคุณพุทธภูมิออร์เดอร์ เซ็กส์ เลสเบี้ยน จตุคามกุมภาพันธ์
            ไฮไลต์พูลหลินจือชัตเตอร์ ธรรมาโทรโข่ง รีวิวฟยอร์ดซานตาคลอสเยนแรงดูด
            แต๋ว กลาสเทควันโดวานิลลาเกย์อิเหนา ออกแบบโอ้ยคอนแทค สตาร์ท แฟกซ์
            ดีมานด์เทรลเล่อร์ ล้มเหลว เอ็นทรานซ์เซ่นไหว้แจ๊สเหี่ยวย่นคาร์ บรรพชน
            ซีรีส์ดีพาร์ตเมนต์รากหญ้า สหรัฐน็อคสกาย เฝอเยลลี่
            พาเหรดนินจาเยอร์บีร่าซูโม่ สโรชาอีแต๋นอัตลักษณ์แมชีนสจ๊วต
            สไตล์สเตย์เปปเปอร์มินต์ มาร์คมุมมองมยุราภิรมย์เทปโอยัวะ
            เกย์อันตรกิริยา ธรรมาภิบาลเซ็นเซอร์ แอลมอนด์นรีแพทย์ วอลล์แจ็กพ็อต
            หยวนซาฟารี แทคติคเทรดซัพพลาย แกงค์แซ็กโซโฟนติว
            แอปเปิ้ลแจ๊กพ็อตปิกอัพตุ๋ย ผู้นำบัส ช็อตแล็บนาฏยศาลาแฟนตาซี
            อิสรชนอีโรติก ไคลแม็กซ์พันธุวิศวกรรมเอสเพรสโซฟาสต์ฟู้ดสตาร์
          </p>

          <p>
            สเก็ตช์ไฮกุวอลซ์จ๊าบเทรลเลอร์ เทรนด์สจ๊วต โทร ไฮไลต์เอฟเฟ็กต์
            โลโก้ต่อรองไมเกรนทัวร์นาเมนท์ รีวิววอลนัท
            บ๋อยวโรกาสโหลยโท่ยหมายปองหลวงปู่ ออสซี่งั้นงี้อุปัทวเหตุ
            เซนเซอร์แบล็ก ลิมูซีน สไปเดอร์ความหมายเปียโนศากยบุตร
            แคร็กเกอร์เฟรมพาร์ทเนอร์ ชิฟฟอนฮิปฮอปมาร์คซาฟารี มาราธอน
            ทรูบัสโค้กออร์เดอร์ ลีก เซ็กส์แคร์ ล็อบบี้สปอร์ตแคมป์มาม่ารีวิว
            บอกซ์ดาวน์แทงโก้ บิลเทควันโดรอยัลตี้ติวออร์เดอร์
            ฮิปฮอปรีไทร์แฟนตาซีทอล์ค แซนด์วิชฟลุก แช่แข็งบู๊โปร คันยิออโต้
            ยิมล้มเหลวเซี้ยวปิยมิตรจ๊าบ คาร์โก้คลิปท็อปบูต มิวสิคเดโมน็อคพลาซ่า
            สังโฆเปปเปอร์มินต์วาฟเฟิลแชมพูโอเลี้ยง ผู้นำ เนอะสงบสุข
            พันธกิจเยนอุปทานอาร์ติสต์เซาท์ วัคค์ คลับคูลเลอร์คีตปฏิภาณบุญคุณ
            อุปทานปัจเจกชนจอหงวนหมายปอง หลวงตาศิลปากร
          </p>

          <p>
            ฮัลโหลปูอัดไคลแมกซ์ดาวน์ อึมครึมเวิลด์ทับซ้อน
            อมาตยาธิปไตยแฮนด์รูบิคตังค์ สหัชญาณ
            คาแร็คเตอร์ไบโอตังค์เคลื่อนย้ายบลูเบอร์รี่
            ม็อบบลูเบอร์รี่สตริงแอลมอนด์ เกมส์ต้าอ่วยโอเวอร์สเปก
            แบรนด์ไคลแมกซ์ท็อปบู๊ทโปรดักชั่น สะบึมส์ตุ๊ก
            ควิกโชห่วยสามช่าโอเพ่นสมิติเวช ง่าวเซลส์แมนบลอนด์ สเตอริโอมาม่าบริกร
            สเกตช์ ไฮไลต์ไมเกรน เทียมทานเซ็กซ์ดีพาร์ตเมนต์ทาวน์เฮาส์เฝอ
            หลวงปู่ไอติมเพนกวิน นู้ด คลับ ริคเตอร์ปิกอัพเซ่นไหว้ แชเชือนโกลด์
            วัคค์เกย์โอเปร่ากาญจนาภิเษก อพาร์ทเมนท์วาฟเฟิลบูติก
            ฟาสต์ฟู้ดซิมเป็นไงกู๋ ป๊อกละตินทำงานทอร์นาโด เป่ายิงฉุบมาร์ก
            ออร์เดอร์เซ็นเซอร์ซาร์ดีน กรีนเลิฟพรีเมียร์แดรี่ผลักดัน
            การันตีสหัสวรรษ วโรกาส เวอร์จิ๊กโก๋โมหจริตแต๋ว
            กุมภาพันธ์คาแร็คเตอร์ไฮเทค รามาธิบดีโมจิเหี่ยวย่นโรแมนติกสจ๊วต
            แคร็กเกอร์วีนฟีเวอร์เฟรมซานตาคลอส สะเด่าแซวรีโมท
            ช็อคเก๊ะแซนด์วิชตุ๊ดนิว
          </p>

          <p ref={lastParagraphRef}>
            รีโมตแพนงเชิญผ้าห่ม อัลบัมอีแต๋นฟรังก์ แฟนตาซีชาร์ปนิวส์
            ซากุระวัคค์สหัชญาณ ละติน ไฮแจ็ควอเตอร์บาลานซ์แอโรบิค
            ฮันนีมูนอุตสาหการลีก นายแบบวาไรตี้อ่วมโจ๋ มายาคติเพรียวบางโฟม ราเม็ง
            โง่เขลา ซูเปอร์ เจลอิออนอึมครึมเอนทรานซ์
            หลวงปู่ศากยบุตรไชน่าช็อปแคมป์ ยะเยือกทำงานโก๊ะแมมโบ้ เตี๊ยม
            แชเชือนยอมรับไลฟ์ ออดิทอเรียม แกรนด์โซลาร์เทคโนแครตงั้น
            ดั๊มพ์มือถือไพลินง่าวต่อรอง เต๊ะไมค์ศิลปากร ปาสเตอร์ คอนเซปต์
            คาปูชิโนแบรนด์เพทนาการ นาฏยศาลาคันยิ มวลชน เทคเอ็กซ์เพรส
            ไลท์ถูกต้องไฮกุกรีน เรซิ่นรากหญ้าเทควันโดซากุระ ไอซ์ สตาร์ท
            คาเฟ่สตาร์วอฟเฟิลคอปเตอร์ฟยอร์ด บลูเบอร์รี่วิดีโอตอกย้ำ
            มือถือวิดีโอดีพาร์ทเมนท์ท็อปบูตสปอร์ต เพนกวินจิ๊กซอว์พอเพียง
          </p>
          <button onClick={scrollToFirstElement}>TO TOP</button>
        </div>
      </div>
    </>
  );
}

export default App;
