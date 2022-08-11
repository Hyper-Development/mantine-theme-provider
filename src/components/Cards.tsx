import {
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme } from "../context/useColorScheme";

function Cards() {
  const theme = useMantineTheme();
  const { colorScheme } = useColorScheme();
  const secondaryColor =
    colorScheme === "dark" || colorScheme === "contrast"
      ? theme.colors.dark[6]
      : theme.colors.gray[4];

  return (
    <Box>
      <Grid justify="space-around">
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" sx={(th) => ({ backgroundColor: secondaryColor })}>
            <Card.Section>
              <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} color={theme.black}>
                Norway Fjord Adventures
              </Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }} color={theme.black}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              fullWidth
              style={{
                marginTop: 14,
              }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" style={{ backgroundColor: secondaryColor }}>
            <Card.Section>
              <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} color={theme.black}>
                Norway Fjord Adventures
              </Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }} color={theme.black}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              fullWidth
              style={{
                marginTop: 14,
              }}
              color={theme.primaryColor}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" style={{ backgroundColor: secondaryColor }}>
            <Card.Section>
              <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} color={theme.black}>
                Norway Fjord Adventures
              </Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }} color={theme.black}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              fullWidth
              style={{
                marginTop: 14,
              }}
              color={theme.primaryColor}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Cards;
