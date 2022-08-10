import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";

function Cards() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.dark[5];
  const textColor = theme.colorScheme === "dark" ? theme.black : theme.white;
  const buttonTextColor =
    theme.colorScheme === "dark" ? theme.white : theme.black;
  const buttonBackground =
    theme.colorScheme === "dark"
      ? theme.colors[theme.primaryColor][9]
      : theme.colors[theme.primaryColor][0];

  return (
    <Grid justify="space-around">
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
            <Text weight={500} color={textColor}>
              Norway Fjord Adventures
            </Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }} color={textColor}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            fullWidth
            style={{
              marginTop: 14,
              backgroundColor: buttonBackground,
              color: buttonTextColor,
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
            <Text weight={500} color={textColor}>
              Norway Fjord Adventures
            </Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }} color={textColor}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            fullWidth
            style={{
              marginTop: 14,
              backgroundColor: buttonBackground,
              color: buttonTextColor,
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
            <Text weight={500} color={textColor}>
              Norway Fjord Adventures
            </Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }} color={textColor}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            fullWidth
            style={{
              marginTop: 14,
              backgroundColor: buttonBackground,
              color: buttonTextColor,
            }}
          >
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default Cards;
