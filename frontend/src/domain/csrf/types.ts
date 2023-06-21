// 名前、パスワード、メールアドレスを持つユーザーの型
export type CsrfToken = {
    headerName: string;
    parameterName: string;
    token: string;
};

