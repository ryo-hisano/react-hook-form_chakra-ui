import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Input,
  HStack,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

interface FormInputs {
  inputText1: string;
  inputText2: string;
  inputText3: string;
  inputText4: string;
  inputText5: string;
  selectBox1: string;
  selectBox2: string;
  inputRadio1: string;
  checkBox1: boolean;
  checkBox2: Array<string>;
  textArea1: string;
}

export default function App() {
  const { register, errors, handleSubmit, formState } = useForm<FormInputs>({
    mode: "all",
  });

  // ラジオボタン1用のState
  const [radio1, setRadio1] = useState<string>();

  // ラジオボタン配列
  const radioArray = ["ラジオボタン1", "ラジオボタン2", "ラジオボタン3"];

  // チェックボックス配列
  const checkArray = [
    "チェックボックス1",
    "チェックボックス2",
    "チェックボックス3",
  ];

  // 都道府県配列
  const selectArray2 = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  // 送信時
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data: FormInputs) => {
    await sleep(1000);
    alert(JSON.stringify(data));
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        {!formState.isSubmitted && (
          <>
            <Alert status="info" mb={4}>
              <AlertIcon />
              下記を入力して下さい。
            </Alert>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="h-adr"
            >
              <span className="p-country-name" style={{ display: "none" }}>
                Japan
              </span>
              <FormControl
                id="inputText1"
                isRequired
                isInvalid={errors.inputText1 ? true : false}
              >
                <FormLabel htmlFor="inputText1">テキスト入力</FormLabel>
                <Input
                  name="inputText1"
                  placeholder="プレースホルダー"
                  ref={register({ required: "テキスト入力は必須です。" })}
                />
                <FormErrorMessage>
                  {errors.inputText1 && errors.inputText1.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="inputText2"
                isRequired
                isInvalid={errors.inputText2 ? true : false}
                mt={4}
              >
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  name="inputText2"
                  placeholder="test@example.com"
                  ref={register({
                    required: "メールアドレスは必須です。",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "メールアドレス形式で入力してください。",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.inputText2 && errors.inputText2.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="inputText3"
                isRequired
                isInvalid={errors.inputText3 ? true : false}
                mt={4}
              >
                <FormLabel>電話番号</FormLabel>
                <Input
                  type="tel"
                  name="inputText3"
                  placeholder="0123456789"
                  ref={register({
                    required: "電話番号は必須です。",
                    minLength: {
                      value: 10,
                      message: "10文字以上入力してください。",
                    },
                    maxLength: {
                      value: 11,
                      message: "11文字以下で入力してください。",
                    },
                  })}
                  maxLength={11}
                />
                <FormErrorMessage>
                  {errors.inputText3 && errors.inputText3.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="inputText4" mt={4}>
                <FormLabel>郵便番号</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="〒" />
                  <Input
                    name="inputText4"
                    type="tel"
                    placeholder="1008111"
                    ref={register({
                      pattern: {
                        value: /^\d{7}$/,
                        message: "半角数字7文字で入力してください。",
                      },
                    })}
                    className="p-postal-code"
                    maxLength={7}
                  />
                </InputGroup>
                <FormHelperText>半角数字でご入力ください</FormHelperText>
              </FormControl>
              <FormControl id="selectBox2" mt={4}>
                <FormLabel>都道府県</FormLabel>
                <Select
                  name="selectBox2"
                  placeholder="---"
                  ref={register()}
                  className="p-region"
                >
                  {selectArray2.map((val, i) => {
                    return (
                      <option key={i} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </Select>
                <FormErrorMessage>
                  {errors.selectBox2 && errors.selectBox2.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="inputText5" mt={4}>
                <FormLabel htmlFor="inputText5">ご住所</FormLabel>
                <Input
                  name="inputText5"
                  placeholder="東京都千代田区千代田1-1"
                  ref={register()}
                  className="p-locality p-street-address p-extended-address"
                />
              </FormControl>
              <FormControl
                id="selectBox1"
                isRequired
                isInvalid={errors.selectBox1 ? true : false}
                mt={4}
              >
                <FormLabel>セレクトボックス</FormLabel>
                <Select
                  name="selectBox1"
                  placeholder="---"
                  ref={register({ required: "セレクトボックスは必須です。" })}
                >
                  <option value="option1">オプション1</option>
                  <option value="option2">オプション2</option>
                  <option value="option3">オプション3</option>
                </Select>
                <FormErrorMessage>
                  {errors.selectBox1 && errors.selectBox1.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="inputRadio1"
                isRequired
                isInvalid={errors.inputRadio1 ? true : false}
                mt={4}
              >
                <FormLabel>ラジオボタン</FormLabel>
                <RadioGroup
                  name="inputRadio1"
                  onChange={(value) => setRadio1(value.toString())}
                  value={radio1}
                >
                  <HStack spacing={10} direction="row">
                    {radioArray.map((val, i) => {
                      return (
                        <Radio
                          key={i}
                          value={val}
                          ref={register({ required: true })}
                          isChecked={val === radio1}
                        >
                          {val}
                        </Radio>
                      );
                    })}
                  </HStack>
                </RadioGroup>
                <FormErrorMessage>
                  {errors.inputRadio1 && "ラジオボタンは必須です。"}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="checkBox1"
                isRequired
                isInvalid={errors.checkBox1 ? true : false}
                mt={4}
              >
                <FormLabel>単一チェックボックス</FormLabel>
                <Checkbox
                  name="checkBox1"
                  ref={register({ required: "チェックボックス1は必須です。" })}
                >
                  チェックボックス1
                </Checkbox>
                <FormErrorMessage>
                  {errors.checkBox1 && errors.checkBox1.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="checkBox2" mt={4}>
                <FormLabel>複数チェックボックス</FormLabel>
                <CheckboxGroup>
                  <HStack spacing={10} direction="row">
                    {checkArray.map((val, i) => (
                      <Checkbox
                        key={i}
                        name="checkBox2"
                        value={val}
                        ref={register()}
                      >
                        {val}
                      </Checkbox>
                    ))}
                  </HStack>
                </CheckboxGroup>
              </FormControl>
              <FormControl id="textArea1" mt={4}>
                <FormLabel>テキストエリア</FormLabel>
                <Textarea
                  name="textArea1"
                  placeholder="なにか記述して下さい"
                  ref={register()}
                />
              </FormControl>
              <Button
                colorScheme="blue"
                mt={4}
                isLoading={formState.isSubmitting}
                type="submit"
                disabled={!formState.isValid}
              >
                送信する
              </Button>
            </form>
          </>
        )}
        {formState.isSubmitted && (
          <Alert status="success" mb={4}>
            <AlertIcon />
            送信完了しました。
          </Alert>
        )}
      </Box>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
