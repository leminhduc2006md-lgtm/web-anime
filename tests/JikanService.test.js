import JikanService from "../services/JikanService.js";
import axios from "axios";

describe("Kiểm thử JikanService Class (Giải pháp Mocking thuần cho ES Modules)", () => {
   
    const originalGet = axios.get;

    
    afterEach(() => {
        axios.get = originalGet;
    });

    test("Hàm getAnimeDetail phải trả về đúng thông tin Anime theo ID", async () => {
        axios.get = async () => ({
            data: {
                data: { title: "Naruto" }
            }
        });

        const data = await JikanService.getAnimeDetail(20);
        
        expect(data).toBeDefined();
        expect(data.title).toContain("Naruto");
    });

    test("Hàm searchAnime phải trả về một mảng danh sách kết quả phù hợp", async () => {
        axios.get = async () => ({
            data: {
                data: [
                    { title: "One Piece" },
                    { title: "One Piece Film Red" }
                ]
            }
        });
        const results = await JikanService.searchAnime("One Piece");
        
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].title).toContain("One Piece");
    });
});