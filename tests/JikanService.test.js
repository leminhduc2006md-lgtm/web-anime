import JikanService from "../services/JikanService.js";


describe("Kiểm thử JikanService Class", () => {
    
   
    test("Hàm getAnimeDetail phải trả về đúng thông tin Anime theo ID", async () => {
        
        const data = await JikanService.getAnimeDetail(20);
        
        
        expect(data).toBeDefined();
        
        expect(data.title).toContain("Naruto");
    });

    
    test("Hàm searchAnime phải trả về một mảng danh sách kết quả phù hợp", async () => {
        const query = "One Piece";
        const results = await JikanService.searchAnime(query);
        
        
        expect(Array.isArray(results)).toBe(true);
        
        expect(results.length).toBeGreaterThan(0);
    });
});