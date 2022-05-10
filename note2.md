Set up các cấu hình cần thiết và babel để sử dụng các đường dẫn tuyệt đối trên React Native, React Native không hỗ trợ sử dụng baseURL: './src' như trên React

 1. cài thêm plugin eslint cho VSCode để có được thông báo các lỗi syntax một cách real-time như kiểu IDE. Và để cho VSCode có thể hiểu được project của chúng ta là một JavaScript Project, ta cần một file jsconfig.json nằm ở thư mục gốc.

 2. tạo thêm 1 file react-native.config.js để sử dụng các assets ở native code.

 3. Nên sử dụng yarn thay cho npm để cài đặt các gói package cho thời gian cài đặt nhanh hơn, add 1 package mới vào yarn: yarn add .... hoặc cài đặt gói có sẵn bằng yarn install

 4. Babel: React Native sử dụng babel để chuyển đổi cấu trúc từ ES6 trở lên và JSX về các phiên bản JS tương thích với môi trường hiện tại. Babel đã được tích hợp mặc định, việc của ta là cấu hình và cài cắm thêm một số plugin.
 install package --dev babel-plugin-module-resolver để thêm một trình phân giải mới cho các mô-đun khi biên dịch mã bằng Babel. Plugin này cho phép thêm các thư mục gốc mới có chứa các mô-đun thêm vào. 

 5. install package babel-plugin-transform-remove-console --save-dev để remove all console.* calls.
