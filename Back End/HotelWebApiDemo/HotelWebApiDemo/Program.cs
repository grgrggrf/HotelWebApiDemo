//创建应用程序构建器，为后续配置 Web API 做准备
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
//向 ASP.NET Core 的依赖注入（DI）容器 这里添加Controller
builder.Services.AddControllers();

//注册并添加OpenApi
builder.Services.AddOpenApi();
//创建WebAPI接口,负责准备、配置整个应用程序
var app = builder.Build();
app.UseCors("ReactPolicy");
//判断当前程序是否运行在 Development（开发环境）如果是就执行里面的代码
if (app.Environment.IsDevelopment())
{
    // 暴露OpenAPI 文档,使接口有 API地址 请求方法 参数 Request Body Response 数据结构
    app.MapOpenApi();
}
//HTTP 请求自动重定向到 HTTPS。
app.UseHttpsRedirection();

app.UseAuthorization();
//把 Controller 暴露成 HTTP 路由，让 ASP.NET Core 能够把请求匹配到 Controller。
app.MapControllers();
//启动WebAPi接口，并监听HTTP请求
app.Run();
