## WEB ANiME

Bài tập lớn môn ""Kỹ thuật Phần mềm"" - Ứng dụng web tìm kiếm và tra cứu thông tin Anime sử dụng dữ liệu từ ""Jikan API v4"" (Mã nguồn mở chính thức của MyAnimeList).

Dự án được xây dựng dựa trên nền tảng **Node.js**, **Express framework** và **EJS template engine**, tuân thủ nghiêm ngặt các nguyên lý thiết kế kiến trúc phần mềm, đóng gói hướng đối tượng (OOP) và kiểm thử tự động (Unit Testing).

---

## 🚀 Các Điểm Cải Tiến & Tư Duy Kỹ Thuật Phần Mềm

Ứng dụng đã được tái cấu trúc (Refactor) từ mã nguồn thủ tục ban đầu để đáp ứng các tiêu chí vận hành hệ thống thực tế:

1. **Tối ưu hóa hiệu năng (Performance Optimization):** * Trích xuất và cắt mảng dữ liệu tĩnh từ các file JSON (`recent`, `hot-tv`, `hot-movie`,...) ngay từ bước khởi tạo server, thay vì xử lý lặp đi lặp lại trong middleware trên mỗi request. Giảm tải tối đa cho CPU và tăng tốc độ phản hồi.
2. **Áp dụng Lập trình hướng đối tượng (OOP) & Service Pattern:**
   * Đóng gói toàn bộ logic gọi API và xử lý dữ liệu mạng vào lớp nghiệp vụ tĩnh `JikanService`. Giúp mã nguồn phân lớp rõ ràng, dễ bảo trì và dễ mở rộng.
3. **Module hóa hệ thống định tuyến (Modular Routing):**
   * Sử dụng `express.Router()` tách biệt hoàn toàn các tuyến đường (routes) ra khỏi file cấu hình chính `app.js`. Đảm bảo nguyên lý Single Responsibility (Đơn nhiệm) và hạn chế xung đột mã nguồn (conflict) khi làm việc nhóm.
4. **Cơ chế xử lý ngoại lệ tập trung (Centralized Error Handling):**
   * Thay vì sử dụng các khối `try/catch` lặp lại để tự render trang lỗi ở từng route (vi phạm nguyên lý DRY - Don't Repeat Yourself), hệ thống sử dụng một Error-handling Middleware tập trung ở cuối vòng đời request để kiểm soát toàn bộ lỗi hệ thống một cách nhất quán.
5. **Kiểm thử tự động nâng cao (Unit Testing & Mocking):**
   * Tích hợp khung kiểm thử **Jest** chạy trên môi trường ES Modules.
   * Áp dụng kỹ thuật **Pure JS Mocking** đối với thư viện `axios` để giả lập dữ liệu trả về từ API. Việc kiểm thử hoàn toàn độc lập với trạng thái mạng internet, triệt tiêu hoàn toàn lỗi nghẽn cổng `504 Gateway Timeout` từ phía server public.

---

## 🛠️ Công Nghệ Sử Dụng

* **Backend:** Node.js, Express.js (ES Modules)
* **Frontend View:** HTML5, CSS3, EJS (Embedded JavaScript templates)
* **HTTP Client:** Axios
* **Testing Framework:** Jest

---

