// 资源目录配置文件，只修改这里！
const folderData = [
    // {
    //     folderName: "见到佳佳的第一天",
    //     path: "见到佳佳的第一天/",
    //     title: "见到佳佳的第一天", // 新增阅览页标题，不需要标题可删除这一行
    //     resources: [
    //         //{ type:"audio", src:"bgm.mp3" },
    //         //{ type:"image", src:"photo1.jpg" },
    //         { type:"video", src:"IMG_0029.MP4" }
    //     ]
    // },
	{
        folderName: "给佳佳的一封信",
        title: "给佳佳的一封信", // 新增阅览页标题，不需要标题可删除这一行
        path: "forJiaJia/",
        resources: [
			{ type:"text", src:"note.txt" }, // ← 改为text，读取txt文件
            // { type:"image", src:"photo_2026-07-28_15-51-39.jpg" },
            // { type:"video", src:"IMG_0029.MP4" }
            
        ]
    }
];
