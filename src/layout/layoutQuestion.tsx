import React from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

import { useTranslation } from "next-i18next";

export function LayoutQuestion() {
  const { t } = useTranslation();
  const [sliderValue1, setSliderValue1] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const [sliderValue3, setSliderValue3] = React.useState(0);
  const [sliderValue4, setSliderValue4] = React.useState(0);

  const [showTooltip, setShowTooltip] = React.useState(false);
  const [step, setStep] = React.useState(1);

  function NextStep() {
    setStep(step + 1);
  }

  {
    switch (step) {
      case 1:
        return (
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
            width="100%"
            gap="1.2rem"
            pt="2rem"
            pb="2rem"
          >
            <Image
              src="https://images.mentimeter.com/themes/832111/tyett7pf-brand-light.svg?auto=compress%2Cformat&w=400&expires=1663899067&s=17253bad0b19608cfc077d632adf887a"
              alt="logo"
              width="20rem"
            />
            <Flex align="center" direction="column" gap="2rem">
              <Image
                src="https://images.mentimeter.com/images/0610c286-91cb-40f6-a1a5-7c3188b91ed1.png?auto=compress%2Cformat&fm=png&w=1080&expires=1663899067&s=327031285e376b2ea3c62b8aa87bc5bb"
                alt="logo"
                maxWidth="20rem"
              />
              <Flex align="start" width="20rem">
                <Heading as="h4" size="md">
                  {t("common:welcome")}
                </Heading>
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center" width="20rem">
              <Text fontWeight="500">{t("common:introduction")}</Text>
              <Button variant="solid" bgColor="#B2B2B4" color="#252B36">
                {t("common:skip")}
              </Button>
            </Flex>
            <Flex direction="column" width="20rem">
              <Flex
                align="center"
                direction="column"
                justify="center"
                width="20rem"
              >
                <Text> {`${sliderValue1}`}</Text>
                <Slider
                  id="slider"
                  defaultValue={0}
                  min={0}
                  max={10}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue1(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack bg="#252B36">
                    <SliderFilledTrack bg="#252B36" />
                  </SliderTrack>

                  <SliderThumb bg="blue" boxSize="1.8rem" />
                </Slider>
              </Flex>

              <Flex justify="space-between">
                <Text fontSize=".6rem">{t("common:notComfortable")}</Text>
                <Text fontSize=".6rem">{t("common:veryComfortable")}</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center" width="20rem">
              <Text fontWeight="500">{t("common:sharing")}</Text>
              <Button variant="solid" bgColor="#B2B2B4" color="#252B36">
                {t("common:skip")}
              </Button>
            </Flex>
            <Flex direction="column" width="20rem">
              <Flex
                align="center"
                direction="column"
                justify="center"
                width="20rem"
              >
                <Text> {`${sliderValue2}`}</Text>
                <Slider
                  id="slider"
                  defaultValue={0}
                  min={0}
                  max={10}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue2(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack bg="#252B36">
                    <SliderFilledTrack bg="#252B36" />
                  </SliderTrack>

                  <SliderThumb bg="pink" boxSize="1.8rem" />
                </Slider>
              </Flex>

              <Flex justify="space-between">
                <Text fontSize=".6rem">{t("common:notComfortable")}</Text>
                <Text fontSize=".6rem">{t("common:veryComfortable")}</Text>
              </Flex>
            </Flex>

            <Flex justify="space-between" align="center" width="20rem">
              <Text fontWeight="500">{t("common:clarifying")}</Text>
              <Button variant="solid" bgColor="#B2B2B4" color="#252B36">
                {t("common:skip")}
              </Button>
            </Flex>
            <Flex direction="column" width="20rem">
              <Flex
                align="center"
                direction="column"
                justify="center"
                width="20rem"
              >
                <Text> {`${sliderValue3}`}</Text>
                <Slider
                  id="slider"
                  defaultValue={0}
                  min={0}
                  max={10}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue3(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack bg="#252B36">
                    <SliderFilledTrack bg="#252B36" />
                  </SliderTrack>

                  <SliderThumb bg="red" boxSize="1.8rem" />
                </Slider>
              </Flex>

              <Flex justify="space-between">
                <Text fontSize=".6rem">{t("common:notComfortable")}</Text>
                <Text fontSize=".6rem">{t("common:veryComfortable")}</Text>
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center" width="20rem">
              <Text fontWeight="500">{t("common:personal")}</Text>
              <Button variant="solid" bgColor="#B2B2B4" color="#252B36">
                {t("common:skip")}
              </Button>
            </Flex>
            <Flex direction="column" width="20rem">
              <Flex
                align="center"
                direction="column"
                justify="center"
                width="20rem"
              >
                <Text> {`${sliderValue4}`}</Text>
                <Slider
                  id="slider"
                  defaultValue={0}
                  min={0}
                  max={10}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue4(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack bg="#252B36">
                    <SliderFilledTrack bg="#252B36" />
                  </SliderTrack>

                  <SliderThumb bg="yellow" boxSize="1.8rem" />
                </Slider>
              </Flex>

              <Flex justify="space-between">
                <Text fontSize=".6rem">{t("common:notComfortable")}</Text>
                <Text fontSize=".6rem">{t("common:veryComfortable")}</Text>
              </Flex>
              <Button
                colorScheme={"grayX"}
                color="#252B36"
                mt={4}
                onClick={NextStep}
              >
                {t("common:advance")}
              </Button>
            </Flex>
          </Flex>
        );
      case 2:
        return (
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
            width="100%"
            gap="1.2rem"
            pt="2rem"
            pb="2rem"
          >
            <Text>{t("common:thanks")}</Text>
          </Flex>
        );
    }
  }
}
