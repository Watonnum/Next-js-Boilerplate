'use client';

export default function Footer() {
  return (
    <div className="bg-[#F7F7F7] border-t md:text-[1rem] text-xs">
      <footer className="grid grid-cols-3 xl:max-w-screen-lg mx-auto md:py-6 md:max-w-screen-md md:px-6 px-6">
        <div className="flex flex-col gap-4 text-[#505050] py-6">
          <a href="/" className="hover:underline w-fit">
            กฎ กติกาและมารยาท
          </a>
          <a href="/" className="hover:underline w-fit">
            คำแนะนำการโพสต์
          </a>
          <a href="/" className="hover:underline w-fit">
            นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
          </a>
        </div>
        <div className="flex flex-col gap-4 text-[#505050] py-6">
          <a href="/" className="hover:underline w-fit">
            สิทธิ์การใช้งานของสมาชิก
          </a>
          <a href="/" className="hover:underline w-fit">
            ติดต่อทีมงาน Pantip
          </a>
          <a href="/" className="hover:underline w-fit">
            ติดต่อลงโฆษณา
          </a>
        </div>
        <div className="flex flex-col gap-4 text-[#505050] py-6">
          <a href="/" className="hover:underline w-fit">
            ร่วมงานกับ Pantip
          </a>
          <a href="/" className="hover:underline w-fit">
            Download App Pantip
          </a>
          <a href="/" className="hover:underline w-fit">
            Pantip Certified Developer
          </a>
        </div>
      </footer>
      <div className="flex">
        <div className="bg-[#F7F7F7] text-[#505050] py-6 md:px-6 px-6 mx-auto xl:flex border-t border-[#E8E8E8] xl:max-w-screen-lg md:max-w-screen-md">
          <p className="mr-4 ">© 2024 Internet Marketing co.,</p>
          <div>
            <a href="#" className="hover:underline">
              เงื่อนไข
            </a>
            {' · '}
            <a href="#" className="hover:underline">
              ความเป็นส่วนตัว
            </a>
            {' · '}
            <a href="#" className="hover:underline">
              ทางเลือกความเป็นส่วนตัว
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
